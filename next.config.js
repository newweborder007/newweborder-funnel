/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, x-refresh-token'
          }
        ]
      },
      {
        source: '/api/(.*)/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, x-refresh-token'
          }
        ]
      }
    ];
  },
  images: {
    // domains: ['randomuser.me'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '**',
      },
    ],
  }
};

module.exports = nextConfig;
