/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "wallpaperaccess.com",
      },
    ],
  },
};

export default nextConfig;
