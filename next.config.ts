import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx"],
  output: "export",

  poweredByHeader: false,
  compress: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  typedRoutes: true,
  experimental: {
    typedEnv: true,
    authInterrupts: true,
  },

  images: {
    qualities: [65, 75, 100]
  },
};


export default nextConfig;
