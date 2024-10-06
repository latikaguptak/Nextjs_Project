/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
    },
    env: {
        API_KEY: 'YOUR_UNSPLASH_API_KEY',
    },
};

export default nextConfig;
