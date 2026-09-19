"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail } from "lucide-react";
import { createClient } from "@/lib/supabase/browser";

export default function LoginForm({ initialError }: { initialError?: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(initialError ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError("");

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (signInError) {
        setError("Unable to sign in with those credentials.");
        return;
      }
      router.replace("/admin");
      router.refresh();
    } catch {
      setError("CMS authentication is not configured. Contact the site administrator.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="admin-email" className="mb-2 block text-sm font-semibold text-gray-700">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input id="admin-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200" />
        </div>
      </div>
      <div>
        <label htmlFor="admin-password" className="mb-2 block text-sm font-semibold text-gray-700">Password</label>
        <div className="relative">
          <LockKeyhole className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input id="admin-password" type="password" autoComplete="current-password" required minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200" />
        </div>
      </div>
      {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-green-700 py-3 font-semibold text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
