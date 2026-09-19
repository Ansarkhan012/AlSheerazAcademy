import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { createPublicClient } from "@/lib/supabase/public";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "/",
    "/about",
    "/courses",
    "/fees",
    "/contact",
    "/blog",
    "/quran",
    "/online-quran-classes-for-kids",
    "/online-quran-classes-for-adults",
  ];
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
  const surahEntries: MetadataRoute.Sitemap = Array.from(
    { length: 114 },
    (_, index) => ({
      url: absoluteUrl(`/quran/${index + 1}`),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    }),
  );
  const db = createPublicClient();
  const { data: posts } = await db
    .from("posts")
    .select("slug,updated_at")
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });
  const postEntries: MetadataRoute.Sitemap = (posts ?? []).map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updated_at),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticEntries, ...postEntries, ...surahEntries];
}
