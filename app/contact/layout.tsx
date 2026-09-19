import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact and Free Trial",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
