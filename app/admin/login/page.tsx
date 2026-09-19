import LoginForm from "./login-form";
import Image from "next/image";

export default async function AdminLogin({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  const initialError = error === "unauthorized" ? "This account is not authorized for CMS access." : undefined;

  return (
    <section className="relative min-h-[70vh] bg-green-900 px-4 py-16" style={{ backgroundImage: "url('/images/pattern.png')" }}>
      <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <Image src="/images/logo.png" width={64} height={64} alt="Al Sheeraz Islamic School" className="mx-auto mb-4 h-16 w-16 object-contain" />
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">Al Sheeraz CMS</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Admin login</h1>
          <p className="mt-2 text-sm text-gray-600">Authorized administrators and editors only.</p>
        </div>
        <LoginForm initialError={initialError} />
      </div>
    </section>
  );
}
