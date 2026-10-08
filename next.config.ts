import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/shopping2',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
