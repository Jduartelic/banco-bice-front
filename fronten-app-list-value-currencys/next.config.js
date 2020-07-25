require('dotenv').config();
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack: (config, { defaultLoaders }) => {
    return config;
  },
  poweredByHeader: false,
  publicRuntimeConfig: {
    // Will be available on both server and client
    ENV: process.env.ENV,
  },
});
