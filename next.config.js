/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    metadataBase: 'http://localhost:3000',
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
