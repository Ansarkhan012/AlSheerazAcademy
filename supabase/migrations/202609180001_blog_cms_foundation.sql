begin;

create extension if not exists pgcrypto;

create type public.cms_role as enum ('admin', 'editor');
create type public.post_status as enum ('draft', 'published', 'archived');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text check (display_name is null or char_length(display_name) between 2 and 100),
  role public.cms_role not null default 'editor',
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 80),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  description text check (description is null or char_length(description) <= 500),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.tags (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 50),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 2 and 200),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  excerpt text not null check (char_length(excerpt) between 10 and 500),
  content jsonb not null default '{"type":"doc","content":[]}'::jsonb,
  featured_image_path text,
  featured_image_alt text,
  author_id uuid not null references public.profiles(id) on delete restrict,
  category_id uuid references public.categories(id) on delete set null,
  status public.post_status not null default 'draft',
  seo_title text check (seo_title is null or char_length(seo_title) <= 70),
  seo_description text check (seo_description is null or char_length(seo_description) <= 170),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint posts_content_is_editor_document check (
    jsonb_typeof(content) = 'object' and content ->> 'type' = 'doc'
  ),
  constraint posts_published_at_required check (status <> 'published' or published_at is not null),
  constraint posts_featured_image_alt_required check (
    featured_image_path is null or char_length(coalesce(featured_image_alt, '')) between 2 and 250
  ),
  constraint posts_featured_image_safe_path check (
    featured_image_path is null or featured_image_path ~ '^[0-9a-f-]{36}/[0-9a-f-]{36}/[A-Za-z0-9][A-Za-z0-9._-]*$'
  )
);

create table public.post_tags (
  post_id uuid not null references public.posts(id) on delete cascade,
  tag_id uuid not null references public.tags(id) on delete cascade,
  primary key (post_id, tag_id)
);

create index posts_public_listing_idx on public.posts (published_at desc) where status = 'published';
create index posts_author_id_idx on public.posts (author_id);
create index posts_category_id_idx on public.posts (category_id);
create index post_tags_tag_id_idx on public.post_tags (tag_id);

create function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at before update on public.profiles
for each row execute function public.set_updated_at();
create trigger categories_set_updated_at before update on public.categories
for each row execute function public.set_updated_at();
create trigger tags_set_updated_at before update on public.tags
for each row execute function public.set_updated_at();
create trigger posts_set_updated_at before update on public.posts
for each row execute function public.set_updated_at();

revoke all on function public.set_updated_at() from public;

create function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name, role, is_active)
  values (
    new.id,
    case
      when char_length(trim(coalesce(new.raw_user_meta_data ->> 'display_name', ''))) between 2 and 100
        then trim(new.raw_user_meta_data ->> 'display_name')
      else null
    end,
    'editor',
    false
  );
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_auth_user();

revoke all on function public.handle_new_auth_user() from public;

create function public.is_active_cms_user()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles
    where id = (select auth.uid())
      and is_active = true
      and role in ('admin', 'editor')
  );
$$;

revoke all on function public.is_active_cms_user() from public;
grant execute on function public.is_active_cms_user() to authenticated;

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.tags enable row level security;
alter table public.posts enable row level security;
alter table public.post_tags enable row level security;

revoke all on table public.profiles, public.categories, public.tags, public.posts, public.post_tags from anon, authenticated;
grant select on public.categories, public.tags, public.posts, public.post_tags to anon;
grant select on public.profiles to authenticated;
grant select, insert, update, delete on public.categories, public.tags, public.posts, public.post_tags to authenticated;

create policy profiles_select_own
on public.profiles for select to authenticated
using ((select auth.uid()) = id);

create policy posts_public_select_published
on public.posts for select to anon, authenticated
using (status = 'published' and published_at <= now());
create policy posts_cms_select
on public.posts for select to authenticated
using ((select public.is_active_cms_user()));
create policy posts_cms_insert
on public.posts for insert to authenticated
with check ((select public.is_active_cms_user()));
create policy posts_cms_update
on public.posts for update to authenticated
using ((select public.is_active_cms_user()))
with check ((select public.is_active_cms_user()));
create policy posts_cms_delete
on public.posts for delete to authenticated
using ((select public.is_active_cms_user()));

create policy categories_public_select_for_published_posts
on public.categories for select to anon, authenticated
using (exists (
  select 1 from public.posts
  where posts.category_id = categories.id
    and posts.status = 'published'
    and posts.published_at <= now()
));
create policy categories_cms_select on public.categories for select to authenticated using ((select public.is_active_cms_user()));
create policy categories_cms_insert on public.categories for insert to authenticated with check ((select public.is_active_cms_user()));
create policy categories_cms_update on public.categories for update to authenticated using ((select public.is_active_cms_user())) with check ((select public.is_active_cms_user()));
create policy categories_cms_delete on public.categories for delete to authenticated using ((select public.is_active_cms_user()));

create policy tags_public_select_for_published_posts
on public.tags for select to anon, authenticated
using (exists (
  select 1 from public.post_tags
  join public.posts on posts.id = post_tags.post_id
  where post_tags.tag_id = tags.id
    and posts.status = 'published'
    and posts.published_at <= now()
));
create policy tags_cms_select on public.tags for select to authenticated using ((select public.is_active_cms_user()));
create policy tags_cms_insert on public.tags for insert to authenticated with check ((select public.is_active_cms_user()));
create policy tags_cms_update on public.tags for update to authenticated using ((select public.is_active_cms_user())) with check ((select public.is_active_cms_user()));
create policy tags_cms_delete on public.tags for delete to authenticated using ((select public.is_active_cms_user()));

create policy post_tags_public_select_for_published_posts
on public.post_tags for select to anon, authenticated
using (exists (
  select 1 from public.posts
  where posts.id = post_tags.post_id
    and posts.status = 'published'
    and posts.published_at <= now()
));
create policy post_tags_cms_select on public.post_tags for select to authenticated using ((select public.is_active_cms_user()));
create policy post_tags_cms_insert on public.post_tags for insert to authenticated with check ((select public.is_active_cms_user()));
create policy post_tags_cms_delete on public.post_tags for delete to authenticated using ((select public.is_active_cms_user()));

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'blog-media',
  'blog-media',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy blog_media_cms_select
on storage.objects for select to authenticated
using (bucket_id = 'blog-media' and (select public.is_active_cms_user()));
create policy blog_media_cms_insert
on storage.objects for insert to authenticated
with check (
  bucket_id = 'blog-media'
  and (select public.is_active_cms_user())
  and (storage.foldername(name))[1] = (select auth.uid())::text
  and name ~ '^[0-9a-f-]{36}/[0-9a-f-]{36}/[A-Za-z0-9][A-Za-z0-9._-]*$'
);
create policy blog_media_cms_update
on storage.objects for update to authenticated
using (
  bucket_id = 'blog-media'
  and (select public.is_active_cms_user())
  and (storage.foldername(name))[1] = (select auth.uid())::text
)
with check (
  bucket_id = 'blog-media'
  and (select public.is_active_cms_user())
  and (storage.foldername(name))[1] = (select auth.uid())::text
  and name ~ '^[0-9a-f-]{36}/[0-9a-f-]{36}/[A-Za-z0-9][A-Za-z0-9._-]*$'
);
create policy blog_media_cms_delete
on storage.objects for delete to authenticated
using (
  bucket_id = 'blog-media'
  and (select public.is_active_cms_user())
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

commit;
