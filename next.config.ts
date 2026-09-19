import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roalamntbnrtzxfmjubk.supabase.co",
        pathname: "/storage/v1/object/public/blog-media/**",
      },
    ],
  },
};

export default nextConfig;
