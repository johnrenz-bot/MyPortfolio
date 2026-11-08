import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/skills",
        destination: "/stack",
        permanent: true,
      },
      {
        source: "/education",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
