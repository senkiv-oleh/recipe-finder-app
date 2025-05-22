import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    SPOONACULAR_API_KEY: process.env.SPOONACULAR_API_KEY,
  },
   images: {
    domains: ['img.spoonacular.com'],
  },
};

export default nextConfig;
