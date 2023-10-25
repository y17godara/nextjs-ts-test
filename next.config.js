/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  env: {
    metadataBase: 'http://localhost:3000',
  },
};

module.exports = nextConfig;
