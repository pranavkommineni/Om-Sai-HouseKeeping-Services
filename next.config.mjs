/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: required for Cloudflare Pages (no Node.js server, pure static hosting)
  output: 'export',
  // Cloudflare Pages serves /about as a file, not a folder route, so emit
  // /about/index.html for every route (avoids 404s on direct/deep links)
  trailingSlash: true,
  images: {
    // next/image's optimization server doesn't exist in a static export;
    // images are served as-is instead
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
