import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quran Class Fees",
  alternates: { canonical: "/fees" },
};

export default function FeesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
