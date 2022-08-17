/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["static.coinstats.app"],
    formats: ["image/png", "image/avif", "image/webp", "image/jpeg"],
  },
};

module.exports = nextConfig;
