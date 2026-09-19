import type { Enums, Json } from "@/lib/supabase/database.types";

type PostStatus = Enums<"post_status">;

export const BLOG_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const POST_STATUSES: readonly PostStatus[] = ["draft", "published", "archived"];

export type EditorDocument = {
  type: "doc";
  content: Json[];
  schemaVersion?: number;
};

export function isValidBlogSlug(value: unknown): value is string {
  return typeof value === "string" && value.length >= 1 && value.length <= 200 && BLOG_SLUG_PATTERN.test(value);
}

export function isPostStatus(value: unknown): value is PostStatus {
  return typeof value === "string" && POST_STATUSES.includes(value as PostStatus);
}

export function isEditorDocument(value: unknown): value is EditorDocument {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const document = value as Record<string, unknown>;
  return document.type === "doc"
    && Array.isArray(document.content)
    && (document.schemaVersion === undefined || (Number.isInteger(document.schemaVersion) && Number(document.schemaVersion) > 0));
}
