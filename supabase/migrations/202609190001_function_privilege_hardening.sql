begin;

-- Supabase projects may grant function execution directly to API roles through
-- default privileges. Revoke both inherited PUBLIC access and explicit role
-- grants so anonymous callers cannot invoke the CMS authorization helper.
revoke execute on function public.is_active_cms_user() from public, anon;
grant execute on function public.is_active_cms_user() to authenticated;

-- Trigger functions are internal implementation details. Table triggers still
-- invoke them, but API roles must not be able to execute them directly.
revoke execute on function public.set_updated_at() from public, anon, authenticated;
revoke execute on function public.handle_new_auth_user() from public, anon, authenticated;

commit;
