/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    metadataBase: process.env.NEXT_PUBLIC_APP_URL,
  },

  images: {
    domains: ['i.imgur.com'], // Add the hostname causing the error here
  },
  // redirect from / to /coming-soon
  async redirects() {
    return [
      {
        source: '/',
        destination: '/coming-soon',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
