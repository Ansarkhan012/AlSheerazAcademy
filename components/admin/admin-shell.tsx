"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, BookOpen, FolderTree, Globe2, LogOut, Menu, Tags, X } from "lucide-react";
import { useState } from "react";
import { logout } from "@/app/admin/actions";

const items = [
  ["Dashboard", "/admin", BarChart3], ["Blogs", "/admin/blogs", BookOpen],
  ["Categories", "/admin/categories", FolderTree], ["Tags", "/admin/tags", Tags],
] as const;

export function AdminShell({ children, name, email, role }: { children: React.ReactNode; name: string; email: string | null; role: string }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const nav = <><div className="border-b border-emerald-800 p-5"><p className="text-xs font-bold tracking-[.22em] text-emerald-300">AL SHEERAZ</p><p className="mt-1 text-xl font-bold">Content Studio</p></div><nav className="flex-1 space-y-1 p-3">{items.map(([label, href, Icon]) => { const active = href === "/admin" ? path === href : path.startsWith(href); return <Link key={href} href={href} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold ${active ? "bg-white text-emerald-950" : "text-emerald-50 hover:bg-emerald-800"}`}><Icon className="h-5 w-5" />{label}</Link>; })}</nav><div className="space-y-2 border-t border-emerald-800 p-3"><Link href="/" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold hover:bg-emerald-800"><Globe2 className="h-5 w-5"/>View website</Link><form action={logout}><button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold hover:bg-emerald-800"><LogOut className="h-5 w-5"/>Logout</button></form></div></>;
  return <div className="min-h-screen bg-slate-50"><aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col bg-emerald-950 text-white lg:flex">{nav}</aside>{open && <div className="fixed inset-0 z-50 lg:hidden"><button aria-label="Close menu" className="absolute inset-0 bg-black/45" onClick={() => setOpen(false)}/><aside className="relative flex h-full w-72 flex-col bg-emerald-950 text-white">{nav}</aside></div>}<div className="lg:pl-64"><header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white/95 px-4 backdrop-blur sm:px-7"><button aria-label={open ? "Close navigation menu" : "Open navigation menu"} className="rounded-lg p-2 text-emerald-900 lg:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button><div className="ml-auto text-right"><p className="text-sm font-semibold text-slate-900">{name}</p><p className="text-xs text-slate-500">{email} · <span className="capitalize">{role}</span></p></div></header><div className="p-4 sm:p-7">{children}</div></div></div>;
}
