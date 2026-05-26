import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.rezona.ai",
          },
        ],
        destination: "https://rezona.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
