import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/Dashboard",
      },
    ];
  },
};

export default nextConfig;
