import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false, // use true for permanent redirect
      },
    ]
  },
};

export default nextConfig;
