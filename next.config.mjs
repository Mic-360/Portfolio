/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    domains: ["wallpaperaccess.com"],
  },
};

export default nextConfig;
