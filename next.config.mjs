import path from "path";
import { getCurrentCommit } from "@onlook/helpers/server";

const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["@onlook/nextjs", { root: path.resolve("."), commit: getCurrentCommit() }]],
  },
  images: {
    domains: ["cdn.sanity.io", "media.graphassets.com"],
  },

  async redirects() {
    return [buildRedirect("/resume", "/share/resume.pdf")];
  },
};

export default nextConfig
