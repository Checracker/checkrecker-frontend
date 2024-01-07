module.exports = {
    module: {
      rules: [
        {
          test: /\.svg$/i,
          issuer: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
  }