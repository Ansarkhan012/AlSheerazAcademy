import type { Json } from "@/lib/supabase/database.types";
export const PUBLIC_PAGE_SIZE = 9;
export function normalizeSearch(value: unknown) {
  return typeof value === "string"
    ? value
        .trim()
        .replace(/[%,()]/g, "")
        .slice(0, 100)
    : "";
}
export function normalizePage(value: unknown) {
  const page = Number(value);
  return Number.isInteger(page) && page > 0 ? Math.min(page, 10000) : 1;
}
export function canonicalBlogUrl(slug?: string) {
  return `https://www.alsheerazislamicschool.com/blog${slug ? `/${slug}` : ""}`;
}
export function publicPostFilter<
  T extends { status: string; published_at: string | null },
>(posts: T[], now = new Date()) {
  return posts.filter(
    (p) =>
      p.status === "published" &&
      p.published_at &&
      new Date(p.published_at) <= now,
  );
}
export function metadataForPost(post: {
  title: string;
  excerpt: string;
  slug: string;
  seo_title: string | null;
  seo_description: string | null;
  featured_image_path: string | null;
}) {
  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    canonical: canonicalBlogUrl(post.slug),
    image: post.featured_image_path || null,
  };
}
export type ContentNode = {
  type?: string;
  content?: ContentNode[];
  text?: string;
  marks?: { type?: string; attrs?: Record<string, unknown> }[];
  attrs?: Record<string, unknown>;
};
export function isSafeHref(value: unknown): value is string {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value, "https://www.alsheerazislamicschool.com");
    return ["http:", "https:", "mailto:", "tel:"].includes(url.protocol);
  } catch {
    return false;
  }
}
export function isSupportedContentNode(type: unknown) {
  return typeof type === "string" && ["doc", "paragraph", "heading", "text", "bulletList", "orderedList", "listItem", "blockquote", "horizontalRule", "hardBreak"].includes(type);
}
export function asContentNode(value: Json): ContentNode {
  return value as ContentNode;
}
