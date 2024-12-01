/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force new deployment with environment variables
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
}

module.exports = nextConfig

