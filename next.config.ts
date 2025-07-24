/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // needed for `next export`
  images: { unoptimized: true }, // GitHub Pages doesn't support next/image optimization
  trailingSlash: true,
};

module.exports = nextConfig;