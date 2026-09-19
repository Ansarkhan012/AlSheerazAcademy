import type { Enums } from "@/lib/supabase/database.types";

type CmsRole = Enums<"cms_role">;

export function isAuthorizedProfile(profile: { role: string; is_active: boolean } | null): profile is { role: CmsRole; is_active: true } {
  return Boolean(profile?.is_active && (profile.role === "admin" || profile.role === "editor"));
}
