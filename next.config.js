const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  output: "standalone",
  images: {
    // domains: [ THIS METHOD IS DEPRICATED for remote patterns
    //   "www.driving.co.uk",
    //   "www.facebook.com",
    //   // "www.pistonheads.com",
    //   "img.pistonheads.com",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.driving.co.uk",
      },
      {
        protocol: "https",
        hostname: "img.pistonheads.com",
      },
      {
        protocol: "https",
        hostname: "https://scontent-lhr8-1.xx.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
    ],
  },
};

module.exports = nextConfig;
