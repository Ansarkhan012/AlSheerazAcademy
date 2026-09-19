"use client";
import { useTransition } from "react";
import { changePostStatus } from "@/app/admin/(cms)/cms-actions";
export function BlogTableActions({ id, status }: { id: string; status: string }) {
  const [pending, start] = useTransition();
  function change(next: "draft" | "published" | "archived") { if (!window.confirm(`Move this article to ${next}?`)) return; start(async () => { await changePostStatus(id, next); }); }
  return <div className="flex flex-wrap gap-2">{status !== "published" && <button disabled={pending} onClick={() => change("published")} className="text-xs font-bold text-emerald-700">Publish</button>}{status !== "draft" && <button disabled={pending} onClick={() => change("draft")} className="text-xs font-bold text-amber-700">Draft</button>}{status !== "archived" && <button disabled={pending} onClick={() => change("archived")} className="text-xs font-bold text-slate-600">Archive</button>}</div>;
}
