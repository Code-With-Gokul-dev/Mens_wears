/** @type {import('next').NextConfig} */

const proxyUrl = process.env.BACKEND_URL
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/liquid-glass/**',
      },
    ],
  }, async rewrites() {
    return {
      afterFiles: [
        {
          source: "/api/:path*",
          destination: `${proxyUrl}/:path*`
        }
      ]
    }
  }

};


export default nextConfig;
