/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['picsum.photos', "localhost"],
    },
};

export default nextConfig;
