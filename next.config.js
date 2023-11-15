/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    USER_TOKEN: process.env.USER_TOKEN,
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
  },
}

module.exports = nextConfig
