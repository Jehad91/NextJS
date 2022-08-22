/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["static.coinstats.app"],
  },
};

module.exports = nextConfig;
