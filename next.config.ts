import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Todo images are served by the external API (lib/api.ts -> imageUrl),
    // not stored locally, so next/image needs this host allow-listed.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "to-dos-api.softclub.tj",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
