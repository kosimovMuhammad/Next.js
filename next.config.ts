import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enables the forbidden()/unauthorized() functions + forbidden.js/unauthorized.js files.
    authInterrupts: true,
  },
};

export default nextConfig;
