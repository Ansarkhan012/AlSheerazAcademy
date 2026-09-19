# Blog CMS foundation setup

This project now includes the verified Supabase CMS and the dynamic public blog. `/blog` and `/blog/[slug]` read published content from Supabase through the sessionless public client; `/blog/tajweed` is served by the migrated database post rather than a hardcoded page.

## 1. Environment variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Use the project's publishable/anon-compatible browser key. Do not add a service-role key to this application and never prefix private SMTP values with `NEXT_PUBLIC_`.

## 2. Apply the migration

Link a local Supabase CLI project to the intended non-production project, review the SQL, then run `supabase db push`. Alternatively, paste `supabase/migrations/202609180001_blog_cms_foundation.sql` into the Supabase SQL editor for the selected project.

Do not apply it to production until the project owner explicitly approves the target project and backup plan.

## 3. Storage

The migration creates/updates the public `blog-media` bucket with a 5 MB limit and permits only JPEG, PNG, WebP, and AVIF. Public URLs may display media, while RLS restricts listing to active CMS users and restricts uploading, updating, and deleting to active CMS users within their own user-ID folder. Upload keys must use:

`{authenticated-user-uuid}/{post-uuid}/{safe-file-name.ext}`

The editor generates a safe UUID-based filename; original user filenames are not used directly.

## 4. First administrator

1. Create the user through Supabase Authentication with an email and strong password.
2. The auth trigger creates a disabled `editor` profile automatically.
3. In the SQL editor, activate that exact known user:

```sql
update public.profiles
set role = 'admin', is_active = true, display_name = 'Approved administrator'
where id = '<UUID copied from Authentication > Users>';
```

Never accept a user UUID or role supplied by the browser. Additional editors must also be activated by an existing trusted administrative process.

## 5. Roles

- `admin`: active CMS administrator.
- `editor`: active CMS content editor.
- `is_active = false`: denied CMS access regardless of role.

The Next.js guard checks the authenticated user's database profile. Database RLS independently repeats the active-role check for direct API access.

## 6. RLS verification

The verification procedure is documented in `supabase/tests/RLS_VERIFICATION.md`. Repeat it whenever Auth, RLS, or Storage policies are changed.

## 7. Local development

Run `pnpm dev`, then visit `/admin/login`. Without Supabase environment variables the public site still builds, while the login form reports that CMS authentication is not configured. An anonymous `/admin` request redirects to `/admin/login?error=unauthorized`.

Content is stored as TipTap-compatible JSON beginning with `{ "type": "doc", "content": [] }`. Public rendering uses the controlled React node/mark renderer in `components/admin/article-content.tsx`, not arbitrary HTML. Unknown nodes are ignored and unsafe link protocols are rejected.
