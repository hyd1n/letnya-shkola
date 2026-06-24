/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // app router is default in Next 14
  // Vercel will automatically pick up the `output: 'standalone'` for serverless
  output: 'standalone',
};

export default nextConfig;
