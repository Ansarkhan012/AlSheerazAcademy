"use client";

import { usePathname } from "next/navigation";
import Header from "./navbar";
import Footer from "./footer";
import WhatsAppButton from "../Whatsapp";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const admin = usePathname().startsWith("/admin");
  if (admin) return <main>{children}</main>;
  return <><header className="sticky -top-10 z-50"><Header /></header><main>{children}</main><footer><Footer /></footer><WhatsAppButton /></>;
}
