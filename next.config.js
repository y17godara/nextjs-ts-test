/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    metadataBase: process.env.NEXT_PUBLIC_APP_URL,
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
