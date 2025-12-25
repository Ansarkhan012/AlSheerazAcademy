import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/Whatsapp";

export const metadata: Metadata = {
  title: {
    default: "Online Quran School | Learn Quran Online with Tajweed",
    template: "%s | Al Sheeraz Islamic School",
  },

  description:
    "Join Al Sheeraz Islamic Academy – Online Quran School offering live Quran classes, Tajweed, Hifz and Islamic studies for kids and adults worldwide.",

  applicationName: "Al Sheeraz Islamic School",

  authors: [{ name: "Al Sheeraz Islamic School" }],

  generator: "Next.js",

  keywords: [
    "Online Quran School",
    "Learn Quran Online",
    "Quran classes for kids",
    "Online Tajweed classes",
    "Islamic studies online",
  ],

  openGraph: {
    title: "Online Quran School | Learn Quran Online",
    description:
      "Live Quran classes with Tajweed & Islamic studies. Learn Quran online with qualified teachers.",
    url: "https://alsheerazislamicacademy.com",
    siteName: "Al Sheeraz Islamic Academy",
    images: [
      {
        url: "/1st.jpg",
        width: 1200,
        height: 630,
        alt: "Online Quran Academy",
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://alsheerazislamicacademy.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      {/* <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Al Sheeraz Islamic Academy",
      url: "https://alsheerazislamicacademy.com",
      logo: "https://alsheerazislamicacademy.com/logo.png",
      sameAs: [
        "https://facebook.com/",
        "https://instagram.com/",
      ],
      description:
        "Online Quran Academy offering Quran classes with Tajweed, Hifz and Islamic studies for kids and adults.",
    }),
  }}
/> */}

    </html>
  );
}
