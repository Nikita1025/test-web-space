/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    USER_TOKEN: process.env.USER_TOKEN,
  },
}

module.exports = nextConfig
