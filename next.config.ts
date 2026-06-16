import type { NextConfig } from "next";

// Captured at build time — used as the Last-Modified value for all pages.
// Redeploy to update this timestamp after content changes.
const BUILD_DATE = new Date().toUTCString();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.liveanswerservice.com" }],
        destination: "https://liveanswerservice.com/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Apply to every route
        source: "/(.*)",
        headers: [
          // Helps Googlebot decide whether to recrawl
          { key: "Last-Modified", value: BUILD_DATE },
          // Hint to CDNs/proxies that vary on encoding (Cloudflare auto-compresses,
          // but some audit tools check for this header explicitly)
          { key: "Vary", value: "Accept-Encoding" },
        ],
      },
    ];
  },
};

export default nextConfig;
