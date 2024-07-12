/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/surah',
                destination: '/',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
