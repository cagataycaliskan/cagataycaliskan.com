const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['udemy-certificate.s3.amazonaws.com'],
  },
};

module.exports = withNextIntl(nextConfig); 