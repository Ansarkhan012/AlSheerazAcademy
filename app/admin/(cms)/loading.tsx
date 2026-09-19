export default function AdminLoading() {
  return <div className="space-y-5" aria-live="polite"><div className="h-9 w-56 animate-pulse rounded-lg bg-slate-200" /><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 6 }, (_, i) => <div key={i} className="h-28 animate-pulse rounded-2xl border bg-white" />)}</div><p className="text-sm text-slate-500">Loading content…</p></div>;
}
