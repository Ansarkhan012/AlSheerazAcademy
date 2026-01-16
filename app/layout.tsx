import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/Whatsapp";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Al Sheeraz Islamic School | Learn Quran Online with Tajweed",
    template: "%s | Al Sheeraz Islamic School",
  },

  description:
    "Al Sheeraz Islamic School offers online Quran classes with Tajweed, Hifz and Islamic studies for kids and adults worldwide.",

  applicationName: "Al Sheeraz Islamic School",

  authors: [{ name: "Al Sheeraz Islamic School" }],

  generator: "Next.js",

  keywords: [
    "Online Quran School",
    "Learn Quran Online",
    "Quran classes for kids",
    "Online Tajweed classes",
    "Hifz Quran Online",
    "Islamic studies online",
  ],

  openGraph: {
    title: "Al Sheeraz Islamic School | Online Quran Classes",
    description:
      "Live Quran classes with Tajweed, Hifz and Islamic studies for kids and adults worldwide.",
    url: "https://www.alsheerazislamicschool.com",
    siteName: "Al Sheeraz Islamic School",
    images: [
      {
        url: "https://www.alsheerazislamicschool.com/1st.webp",
        width: 1200,
        height: 630,
        alt: "Al Sheeraz Islamic School",
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.alsheerazislamicschool.com",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H0D41PRRG9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H0D41PRRG9');
          `}
        </Script>

        {/* Organization Schema (for Google name + logo) */}
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Al Sheeraz Islamic School",
            "url": "https://www.alsheerazislamicschool.com",
            "logo": "https://www.alsheerazislamicschool.com/logo.jpg",
            "description": "Online Quran School offering Quran classes with Tajweed, Hifz and Islamic studies for kids and adults worldwide."
          }
          `}
        </Script>
      </head>

      <body className="overflow-x-hidden">
        <header className="sticky -top-10 z-50">
          <Header />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>

        <WhatsAppButton />
      </body>
    </html>
  );
}
