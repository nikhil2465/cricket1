/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable API routes during export
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      // Add other static pages here
      '/about': { page: '/about' },
      '/programs': { page: '/programs' },
      '/gallery': { page: '/gallery' },
      '/contact': { page: '/contact' },
      // Exclude API routes
    };
  },
  // Disable API routes in production
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'development' ? '/api/:path*' : '/404',
      },
    ];
  },
};

module.exports = nextConfig;
