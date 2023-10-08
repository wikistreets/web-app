/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: "/.jsx?$/",
        exclude: "/node_modules/",
        use: {
          loader: "swc-loader",
          options: {
            // Add any SWC loader options here
          },
        },
      });
    }

    return config;
  },
  images: {
    domains: ['wikistreets.io'], // Add the domain(s) where images are hosted
  },
};
