import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/admin/article-content";
import { createPublicClient } from "@/lib/supabase/public";
import { canonicalBlogUrl, metadataForPost } from "@/lib/blog/public";
import { SITE_URL } from "@/lib/site";
export const dynamic = "force-dynamic";
async function getPost(slug: string) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  const db = createPublicClient();
  const { data } = await db
    .from("posts")
    .select(
      "title,slug,excerpt,content,featured_image_path,featured_image_alt,published_at,updated_at,seo_title,seo_description,category:categories(name),post_tags(tag:tags(name))",
    )
    .eq("slug", slug)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .maybeSingle();
  return data;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post)
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  const m = metadataForPost(post);
  const image = m.image
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-media/${m.image}`
    : undefined;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: m.canonical },
    openGraph: {
      title: m.title,
      description: m.description,
      url: m.canonical,
      type: "article",
      publishedTime: post.published_at || undefined,
      modifiedTime: post.updated_at,
      images: image
        ? [{ url: image, alt: post.featured_image_alt || post.title }]
        : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: m.title,
      description: m.description,
      images: image ? [image] : undefined,
    },
  };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = await getPost(slug);
  if (!p) notFound();
  const canonical = canonicalBlogUrl(p.slug);
  const image = p.featured_image_path
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-media/${p.featured_image_path}`
    : null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.seo_description || p.excerpt,
    image: image || undefined,
    datePublished: p.published_at,
    dateModified: p.updated_at,
    author: {
      "@type": "Organization",
      name: "Al Sheeraz Islamic School",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Al Sheeraz Islamic School",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };
  return (
    <main className="bg-slate-50 py-10 sm:py-16">
      <article className="container max-w-4xl">
        <Link href="/blog" className="text-sm font-bold text-emerald-700">
          ← Back to Blog
        </Link>
        <header className="mt-8 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            {p.category?.name || "Islamic Learning"}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            {p.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            {p.excerpt}
          </p>
          <p className="mt-5 text-sm text-slate-500">
            Al Sheeraz Islamic School ·{" "}
            {new Date(p.published_at!).toLocaleDateString()}
          </p>
          <div className="mt-4 flex justify-center gap-2">
            {p.post_tags.map((x, i) => (
              <span
                key={i}
                className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"
              >
                #{x.tag?.name}
              </span>
            ))}
          </div>
        </header>
        {image && (
          <div className="relative my-10 aspect-[2/1] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={image}
              alt={p.featured_image_alt || p.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width:900px) 100vw, 900px"
            />
          </div>
        )}
        <div className="rounded-3xl border bg-white p-6 shadow-sm sm:p-12">
          <ArticleContent document={p.content} />
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
