import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // SEO Redirects - add any URL changes here to preserve rankings
  async redirects() {
    return [
      // Example: if you change a URL, add redirect here
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true, // 301 redirect
      // },
    ]
  },
}

export default nextConfig
