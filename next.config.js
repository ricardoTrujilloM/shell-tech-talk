/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const nextConfig = {
  webpack(config, options){
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        filename: 'static/shellRemoteEntry.js',
        remotes: {
          CardMFE: 'cardMfe@http://localhost:3001/_next/static/cardMfeRemoteEntry.js'
        }
      })
    )
    return config;
  }
}

module.exports = nextConfig 
