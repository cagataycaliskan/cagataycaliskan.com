const withNextIntl = require('next-intl/plugin')(
  // This is the default location for the i18n config
  './src/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize development startup
  experimental: {
    optimizePackageImports: ['next-intl'],
  },
};

module.exports = withNextIntl(nextConfig);