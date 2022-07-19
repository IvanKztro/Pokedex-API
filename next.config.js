/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // loader: "imgix",
    // path: "https://raw.githubusercontent.com",
    // domains: ["https://raw.githubusercontent.com"],
    loader: "imgix",
    // path: "https://raw.githubusercontent.com",
    path: "",
  },
};

module.exports = nextConfig;
