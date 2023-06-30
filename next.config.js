/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverActions: true,
  },
  output:'standalone'
}
 
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)