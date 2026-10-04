import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 84],
  },
  async redirects() {
    return [
      {
        source: "/solucoes/atendimento-inteligente",
        destination: "/solucoes",
        permanent: true,
      },
      {
        source: "/solucoes/gestao-operacional",
        destination: "/solucoes",
        permanent: true,
      },
      {
        source: "/solucoes/experiencias-digitais",
        destination: "/solucoes",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
