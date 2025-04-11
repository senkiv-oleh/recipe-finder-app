import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        SPOONACULAR_API_KEY: process.env.SPOONACULAR_API_KEY,
    }
};

export default nextConfig;
