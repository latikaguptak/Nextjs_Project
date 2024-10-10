/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com','cdn-icons-png.flaticon.com'],
    },
    env: {
        API_KEY: 'YOUR_UNSPLASH_API_KEY',
    },
};

export default nextConfig;
