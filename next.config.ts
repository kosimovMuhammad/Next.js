import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "to-dos-api.softclub.tj",
      },
    ],
  },
};

export default nextConfig;
