/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/PortFolio' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: isProd ? '/PortFolio/' : '',
 
};

module.exports = nextConfig;
