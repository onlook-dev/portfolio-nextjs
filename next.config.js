const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [['@onlook/nextjs', { root: path.resolve('.') }]]
  },
  images: {
    domains: ["cdn.sanity.io", "media.graphassets.com"],
  },

  async redirects() {
    return [buildRedirect("/resume", "/share/resume.pdf")];
  },
};

module.exports = nextConfig;
