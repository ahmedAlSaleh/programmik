import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/programmik",
  assetPrefix: "/programmik/",
  trailingSlash: true,
};

export default nextConfig;
