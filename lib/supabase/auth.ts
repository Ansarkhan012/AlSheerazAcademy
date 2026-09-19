import "server-only";

import { redirect } from "next/navigation";
import type { Enums } from "./database.types";

type CmsRole = Enums<"cms_role">;
import { hasSupabaseEnv } from "./config";
import { createClient } from "./server";
import { isAuthorizedProfile } from "@/lib/blog/authorization";

export type CmsIdentity = {
  id: string;
  email: string | null;
  displayName: string | null;
  role: CmsRole;
};

export async function getCmsIdentity(): Promise<CmsIdentity | null> {
  if (!hasSupabaseEnv()) return null;

  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  const claims = data?.claims;
  const userId = typeof claims?.sub === "string" ? claims.sub : null;
  if (error || !userId) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("display_name, role, is_active")
    .eq("id", userId)
    .maybeSingle();

  if (!isAuthorizedProfile(profile)) return null;

  return {
    id: userId,
    email: typeof claims?.email === "string" ? claims.email : null,
    displayName: profile.display_name,
    role: profile.role,
  };
}

export async function requireAdminOrEditor() {
  const identity = await getCmsIdentity();
  if (!identity) redirect("/admin/login?error=unauthorized");
  return identity;
}
