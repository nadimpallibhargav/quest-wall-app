/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['wall-questing-assets.s3.amazonaws.com'],
  },
}

module.exports = nextConfig