/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['res.cloudinary.com', 'picsum.photos'],
    },
};

export default nextConfig;