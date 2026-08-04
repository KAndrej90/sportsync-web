import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Keep Turbopack's development files separate from production builds. This
  // prevents `next build` from removing manifests used by a running dev server.
  distDir: isProd ? ".next" : ".next-dev",
  output: "export", // ključna stavka za statički export
  images: { unoptimized: true }, // jer nema Image Optimization na GH Pages
  basePath: "", // za Project Pages (username.github.io/repo)
  assetPrefix: "", // da asseti rade u pod-stazi
  // trailingSlash: true, // uključi ako koristiš relative linkove koji očekuju završni /
};

export default nextConfig;
