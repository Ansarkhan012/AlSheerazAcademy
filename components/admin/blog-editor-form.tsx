"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { savePost } from "@/app/admin/(cms)/cms-actions";
import { normalizeSlug, type PostInput } from "@/lib/blog/cms-validation";
import { FeaturedImageUploader } from "./featured-image-uploader";
import { RichTextEditor } from "./rich-text-editor";

type Option = { id: string; name: string };

function fingerprint(value: PostInput) {
  return JSON.stringify({ ...value, tag_ids: [...value.tag_ids].sort() });
}

export function BlogEditorForm({ userId, post, categories, tags, selectedTags }: {
  userId: string;
  post?: { id: string } & Omit<PostInput, "tag_ids">;
  categories: Option[];
  tags: Option[];
  selectedTags: string[];
}) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [manualSlug, setManualSlug] = useState(Boolean(post));
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const initialForm: PostInput = {
    title: post?.title || "", slug: post?.slug || "", excerpt: post?.excerpt || "",
    content: post?.content || { type: "doc", content: [] },
    featured_image_path: post?.featured_image_path || null,
    featured_image_alt: post?.featured_image_alt || null,
    category_id: post?.category_id || null, tag_ids: selectedTags,
    seo_title: post?.seo_title || null, seo_description: post?.seo_description || null,
    status: post?.status || "draft", published_at: post?.published_at || null,
  };
  const [form, setForm] = useState<PostInput>(initialForm);
  const [savedFingerprint, setSavedFingerprint] = useState(() => fingerprint(initialForm));
  const dirty = fingerprint(form) !== savedFingerprint;

  useEffect(() => {
    if (!dirty || pending) return;
    const warn = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty, pending]);

  useEffect(() => {
    if (!dirty || pending) return;
    const guardAdminNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || !destination.pathname.startsWith("/admin") || destination.href === window.location.href) return;
      if (!window.confirm("You have unsaved changes. Leave this page and discard them?")) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    document.addEventListener("click", guardAdminNavigation, true);
    return () => document.removeEventListener("click", guardAdminNavigation, true);
  }, [dirty, pending]);

  const set = <K extends keyof PostInput>(key: K, value: PostInput[K]) => setForm((current) => ({ ...current, [key]: value }));

  function submit(status: PostInput["status"]) {
    setMessage("");
    start(async () => {
      const savedForm = { ...form, status };
      const result = await savePost(post?.id || null, savedForm);
      setErrors(result.errors || {});
      setMessage(result.message);
      if (result.ok) {
        setSavedFingerprint(fingerprint(savedForm));
        setForm(savedForm);
        router.replace(`/admin/blogs/${result.id}/edit`);
      }
      router.refresh();
    });
  }

  const field = "w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100";
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5 rounded-2xl border bg-white p-5 shadow-sm sm:p-7">
        <label className="block text-sm font-bold">Title<input className={field} value={form.title} onChange={(e) => { set("title", e.target.value); if (!manualSlug) set("slug", normalizeSlug(e.target.value)); }} />{errors.title && <small className="text-red-600">{errors.title}</small>}</label>
        <label className="block text-sm font-bold">Slug<input className={field} value={form.slug} onChange={(e) => { setManualSlug(true); set("slug", normalizeSlug(e.target.value)); }} />{errors.slug && <small className="text-red-600">{errors.slug}</small>}</label>
        <label className="block text-sm font-bold">Excerpt<textarea rows={4} className={field} value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)} /><span className="float-right text-xs font-normal text-slate-500">{form.excerpt.length}/500</span>{errors.excerpt && <small className="text-red-600">{errors.excerpt}</small>}</label>
        <div><p className="mb-2 text-sm font-bold">Content</p><RichTextEditor value={form.content} onChange={(value) => set("content", value)} />{errors.content && <small className="text-red-600">{errors.content}</small>}</div>
        <label className="block text-sm font-bold">SEO title<input className={field} value={form.seo_title || ""} onChange={(e) => set("seo_title", e.target.value || null)} /><span className="float-right text-xs font-normal text-slate-500">{form.seo_title?.length || 0}/70</span></label>
        <label className="block text-sm font-bold">SEO description<textarea rows={3} className={field} value={form.seo_description || ""} onChange={(e) => set("seo_description", e.target.value || null)} /><span className="float-right text-xs font-normal text-slate-500">{form.seo_description?.length || 0}/170</span></label>
      </div>
      <aside className="space-y-5">
        <div className="rounded-2xl border bg-white p-5 shadow-sm"><h2 className="mb-3 font-bold">Publishing</h2><div className="grid gap-2"><button disabled={pending} onClick={() => submit("draft")} className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white disabled:opacity-50">{pending ? "Saving…" : "Save draft"}</button><button disabled={pending} onClick={() => submit("published")} className="rounded-xl bg-emerald-700 px-4 py-3 text-sm font-bold text-white disabled:opacity-50">Publish</button>{post && <button disabled={pending} onClick={() => submit("archived")} className="rounded-xl border px-4 py-3 text-sm font-bold text-slate-700">Archive</button>}</div>{message && <p role="status" className={`mt-3 text-sm ${Object.keys(errors).length ? "text-red-600" : "text-emerald-700"}`}>{message}</p>}</div>
        <div className="rounded-2xl border bg-white p-5 shadow-sm"><h2 className="mb-3 font-bold">Featured image</h2><FeaturedImageUploader userId={userId} path={form.featured_image_path} alt={form.featured_image_alt} onChange={(path, alt) => { set("featured_image_path", path); set("featured_image_alt", alt); }} />{form.featured_image_path && <label className="mt-3 block text-sm font-bold">Alt text<input className={field} value={form.featured_image_alt || ""} onChange={(e) => set("featured_image_alt", e.target.value || null)} />{errors.featured_image_alt && <small className="text-red-600">{errors.featured_image_alt}</small>}</label>}</div>
        <div className="rounded-2xl border bg-white p-5 shadow-sm"><label className="block text-sm font-bold">Category<select className={field} value={form.category_id || ""} onChange={(e) => set("category_id", e.target.value || null)}><option value="">Uncategorized</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label><p className="mb-2 mt-4 text-sm font-bold">Tags</p><div className="max-h-48 space-y-2 overflow-auto">{tags.map((tag) => <label key={tag.id} className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.tag_ids.includes(tag.id)} onChange={(e) => set("tag_ids", e.target.checked ? [...form.tag_ids, tag.id] : form.tag_ids.filter((id) => id !== tag.id))} />{tag.name}</label>)}</div></div>
      </aside>
    </div>
  );
}
