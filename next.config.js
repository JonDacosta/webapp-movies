/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "image.tmdb.org"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/movies/**',
      },
    ],
  },
  // experimental: {
  //   appDir: true,
  // },
}

module.exports = nextConfig
