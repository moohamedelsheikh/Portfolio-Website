/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig
