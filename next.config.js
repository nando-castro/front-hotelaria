/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "api.ts", "api.tsx", ".tsx"],

  basePath: "/hotel",
  reactStrictMode: false,

  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
