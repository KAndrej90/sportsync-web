import type { NextConfig } from "next";
const repo = "sportsync-web"; // npr. 'sportsync-web'
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // ključna stavka za statički export
  images: { unoptimized: true }, // jer nema Image Optimization na GH Pages
  basePath: isProd ? `/${repo}` : "", // za Project Pages (username.github.io/repo)
  assetPrefix: isProd ? `/${repo}/` : "", // da asseti rade u pod-stazi
  // trailingSlash: true, // uključi ako koristiš relative linkove koji očekuju završni /
};

export default nextConfig;
