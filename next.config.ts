import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "svgl.app" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "shadcnblocks.com" },
      { protocol: "https", hostname: "www.shadcnblocks.com" },
    ],
  },
};

export default nextConfig;
