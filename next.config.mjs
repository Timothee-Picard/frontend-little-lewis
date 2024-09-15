/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        dangerouslyAllowSVG: true,
        domains: ['res.cloudinary.com', 'placehold.co'],
    },
};

export default nextConfig;