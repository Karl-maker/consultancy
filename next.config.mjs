/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "pexels.com",
      "pixabay.com",
      "giphy.com",
      "wikimedia.org"
    ]
  },
  webpack(config) {
    // Adding a rule for .hbs files to be loaded as raw text
    config.module.rules.push({
      test: /\.hbs$/,
      use: 'raw-loader', // 'raw-loader' will load .hbs files as strings
    });

    return config;
  }
};

export default nextConfig;
