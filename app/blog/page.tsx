import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Calendar, Search } from "lucide-react";
import { createPublicClient } from "@/lib/supabase/public";
import {
  canonicalBlogUrl,
  normalizePage,
  normalizeSearch,
  PUBLIC_PAGE_SIZE,
} from "@/lib/blog/public";
export const metadata: Metadata = {
  title: "Quran & Islamic Learning Blog",
  description:
    "Practical articles about Quran recitation, Tajweed, Islamic learning, and spiritual growth from Al Sheeraz Islamic School.",
  alternates: { canonical: canonicalBlogUrl() },
  openGraph: {
    title: "Quran & Islamic Learning Blog | Al Sheeraz Islamic School",
    description: "Practical Quran and Islamic learning articles.",
    url: canonicalBlogUrl(),
    type: "website",
  },
};
export const dynamic = "force-dynamic";
export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; page?: string }>;
}) {
  const params = await searchParams;
  const q = normalizeSearch(params.q),
    page = normalizePage(params.page),
    category =
      typeof params.category === "string" ? params.category.slice(0, 200) : "";
  const db = createPublicClient();
  const now = new Date().toISOString();
  const categoryId = category
    ? (await db.from("categories").select("id").eq("slug", category).maybeSingle()).data?.id
    : null;
  let query = db
    .from("posts")
    .select(
      "id,title,slug,excerpt,featured_image_path,featured_image_alt,published_at,category:categories(name,slug),post_tags(tag:tags(name,slug))",
      { count: "exact" },
    )
    .eq("status", "published")
    .lte("published_at", now)
    .order("published_at", { ascending: false })
    .range((page - 1) * PUBLIC_PAGE_SIZE, page * PUBLIC_PAGE_SIZE - 1);
  if (q) query = query.or(`title.ilike.%${q}%,excerpt.ilike.%${q}%`);
  if (category) query = query.eq("category_id", categoryId ?? "00000000-0000-0000-0000-000000000000");
  const [{ data: posts, count }, { data: categories }] = await Promise.all([
    query,
    db
      .from("categories")
      .select("name,slug,posts!inner(id)")
      .eq("posts.status", "published")
      .lte("posts.published_at", now)
      .order("name"),
  ]);
  const pages = Math.max(1, Math.ceil((count || 0) / PUBLIC_PAGE_SIZE));
  if (page > pages) {
    const normalized = new URLSearchParams();
    if (q) normalized.set("q", q);
    if (category) normalized.set("category", category);
    if (pages > 1) normalized.set("page", String(pages));
    redirect(`/blog${normalized.size ? `?${normalized}` : ""}`);
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-islamic-texture px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[.25em] text-emerald-200">
            Knowledge & reflection
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
            Quran & Islamic Learning Blog
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-emerald-50">
            Thoughtful guidance for learning, recitation, and everyday faith.
          </p>
        </div>
      </section>
      <main className="container py-12">
        <form className="mb-8 grid gap-3 rounded-2xl border bg-white p-4 shadow-sm sm:grid-cols-[1fr_240px_auto]">
          <label className="relative">
            <span className="sr-only">Search articles</span>
            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <input
              name="q"
              defaultValue={q}
              placeholder="Search articles"
              className="w-full rounded-xl border py-2.5 pl-10 pr-3"
            />
          </label>
          <select
            aria-label="Filter by category"
            name="category"
            defaultValue={category}
            className="rounded-xl border px-3 py-2.5"
          >
            <option value="">All categories</option>
            {categories?.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
          <button className="rounded-xl bg-emerald-700 px-5 py-2.5 font-bold text-white">
            Search
          </button>
        </form>
        {posts?.length ? (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((p) => {
              const image = p.featured_image_path
                ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-media/${p.featured_image_path}`
                : null;
              return (
                <article
                  key={p.id}
                  className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {image ? (
                    <div className="relative h-56">
                      <Image
                        src={image}
                        alt={p.featured_image_alt || p.title}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="h-40 bg-gradient-to-br from-emerald-100 to-green-50" />
                  )}
                  <div className="p-6">
                    <p className="text-sm font-bold text-emerald-700">
                      {p.category?.name || "Islamic Learning"}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950">
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h2>
                    <p className="mt-3 line-clamp-3 text-slate-600">
                      {p.excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.post_tags.map((x, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                        >
                          #{x.tag?.name}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t pt-4 text-sm">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Calendar className="h-4 w-4" />
                        {new Date(p.published_at!).toLocaleDateString()}
                      </span>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="font-bold text-emerald-700"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed bg-white p-14 text-center">
            <h2 className="text-xl font-bold">No articles found</h2>
            <p className="mt-2 text-slate-500">
              Try another search or category.
            </p>
          </div>
        )}
        <nav className="mt-10 flex items-center justify-center gap-5 text-sm font-bold">
          {page > 1 && (
            <Link
              href={{
                pathname: "/blog",
                query: {
                  ...(q && { q }),
                  ...(category && { category }),
                  page: page - 1,
                },
              }}
            >
              ← Previous
            </Link>
          )}
          <span>
            Page {page} of {pages}
          </span>
          {page < pages && (
            <Link
              href={{
                pathname: "/blog",
                query: {
                  ...(q && { q }),
                  ...(category && { category }),
                  page: page + 1,
                },
              }}
            >
              Next →
            </Link>
          )}
        </nav>
      </main>
    </div>
  );
}
