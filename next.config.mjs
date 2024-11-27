/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "", // Leave empty unless the URL includes a specific port
        pathname: "/**", // Allow all paths from this domain
      },
    ],
    dangerouslyAllowSVG: true, // Allow SVG images
  },
};

export default nextConfig;
