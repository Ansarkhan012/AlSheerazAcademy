import { requireAdminOrEditor } from "@/lib/supabase/auth";
import { AdminShell } from "@/components/admin/admin-shell";

export default async function CmsLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAdminOrEditor();
  return <AdminShell name={user.displayName || "CMS Editor"} email={user.email} role={user.role}>{children}</AdminShell>;
}
