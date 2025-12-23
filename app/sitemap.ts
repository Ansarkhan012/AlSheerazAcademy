import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://alsheerazislamicacademy.com/", lastModified: new Date() },
    { url: "https://alsheerazislamicacademy.com/about" },
    { url: "https://alsheerazislamicacademy.com/courses" },
    { url: "https://alsheerazislamicacademy.com/fees" },
    { url: "https://alsheerazislamicacademy.com/contact" },
    { url: "https://alsheerazislamicacademy.com/online-quran-classes-for-kids" },
    { url: "https://alsheerazislamicacademy.com/online-quran-classes-for-adults" },
  ];
}
