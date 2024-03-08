/** @type {import('next').NextConfig} */

const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/v2/:path*/",
  //       destination: `https://${process.env.NEXT_PUBLIC_HOST}/:path*/`
  //     },
  //   ];
  // },
  trailingSlash: true,
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
