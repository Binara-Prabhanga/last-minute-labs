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
  output: "export", // Required for static export
  assetPrefix: "/last-minute-labs/", // Replace with your repo name
  basePath: "/last-minute-labs", // Replace with your repo name
}

export default nextConfig