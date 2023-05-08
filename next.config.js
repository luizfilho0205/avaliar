/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [{ source: '/', destination: '/home', permanent: true }]
  },
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack']
    })
    return config
  }
}

module.exports = nextConfig
