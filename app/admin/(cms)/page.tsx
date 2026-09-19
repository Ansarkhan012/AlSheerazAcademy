import Link from "next/link";
import { BookOpen, CheckCircle2, FileEdit, Archive, FolderTree, Tags } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { PageHeader, StatusBadge } from "@/components/admin/ui";

export const dynamic = "force-dynamic";
export default async function Dashboard() {
  const db = await createClient();
  const [posts, categories, tags] = await Promise.all([
    db.from("posts").select("id,title,status,updated_at,author:profiles(display_name)", { count: "exact" }).order("updated_at", { ascending: false }).limit(6),
    db.from("categories").select("id", { count: "exact", head: true }), db.from("tags").select("id", { count: "exact", head: true }),
  ]);
  const rows = posts.data ?? [];
  const counts = await Promise.all((["published", "draft", "archived"] as const).map((status) => db.from("posts").select("id", { count: "exact", head: true }).eq("status", status)));
  const cards = [["Total Posts", posts.count ?? 0, BookOpen], ["Published", counts[0].count ?? 0, CheckCircle2], ["Drafts", counts[1].count ?? 0, FileEdit], ["Archived", counts[2].count ?? 0, Archive], ["Categories", categories.count ?? 0, FolderTree], ["Tags", tags.count ?? 0, Tags]] as const;
  return <><PageHeader title="Dashboard" description="A clear view of your publishing workspace." action={{href:"/admin/blogs/new",label:"Create article"}}/><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{cards.map(([label,value,Icon])=><div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><p className="text-sm font-semibold text-slate-500">{label}</p><Icon className="h-5 w-5 text-emerald-700"/></div><p className="mt-3 text-3xl font-bold text-slate-950">{value}</p></div>)}</div><div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between border-b p-5"><h2 className="font-bold text-slate-950">Recent posts</h2><Link href="/admin/blogs" className="text-sm font-semibold text-emerald-700">View all</Link></div>{rows.length ? <div className="divide-y">{rows.map((p)=><div key={p.id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center"><div className="min-w-0 flex-1"><p className="truncate font-semibold text-slate-900">{p.title}</p><p className="text-xs text-slate-500">{p.author?.display_name || "CMS editor"} · {new Date(p.updated_at).toLocaleDateString()}</p></div><StatusBadge status={p.status}/><div className="flex gap-3 text-sm font-semibold"><Link href={`/admin/blogs/${p.id}/edit`} className="text-emerald-700">Edit</Link><Link href={`/admin/blogs/${p.id}/preview`} className="text-slate-600">Preview</Link></div></div>)}</div>:<p className="p-8 text-center text-sm text-slate-500">No posts yet. Create your first draft.</p>}</div></>;
}
