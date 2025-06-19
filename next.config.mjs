/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export", 
  assetPrefix: "/last-minute-labs/", 
  basePath: "/last-minute-labs", 
  images: {
    unoptimized: true, // Ensures images are exported correctly
  },
}

export default nextConfig