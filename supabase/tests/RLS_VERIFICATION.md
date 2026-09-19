# RLS verification checklist

Run these checks only against a local or disposable Supabase project after applying the migration.

Create four test identities: active admin, active editor, disabled editor, and an authenticated user without an activated CMS profile. Use each user's access token with the publishable key; never use the service-role key for the assertions.

For the REST API (`/rest/v1`) verify:

1. Anonymous SELECT returns published posts only and never draft/archived rows.
2. Anonymous INSERT, UPDATE, and DELETE against every CMS table return permission/RLS errors.
3. Active editor can SELECT and mutate posts, categories, tags, and post_tags.
4. Disabled editor cannot read drafts or mutate any CMS table.
5. Active admin can perform the same approved CMS operations.
6. A forged `role` field in request JSON or user metadata does not change authorization.
7. Authenticated users cannot update `profiles.role` or `profiles.is_active` through REST.
8. Public category/tag reads expose only rows attached to currently published posts.

For Storage verify:

1. Anonymous and disabled users cannot upload, update, list, or delete `blog-media` objects.
2. Active CMS users can upload only to `{their-user-id}/{post-id}/{safe-name}`.
3. Files over 5 MB and MIME types outside JPEG/PNG/WebP/AVIF are rejected.
4. Active CMS users can update and delete media only inside their own user-ID folder; other CMS users and unauthenticated users cannot.
5. A known public object URL can be viewed without authentication.

For the app verify:

1. Signed-out `/admin` redirects to `/admin/login` without a loop.
2. Active admin/editor reaches `/admin`.
3. Disabled and unauthorized authenticated users are denied.
4. Logging out clears the session and returns to `/admin/login`.
