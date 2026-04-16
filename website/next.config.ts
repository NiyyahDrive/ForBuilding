import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ForBuilding",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
