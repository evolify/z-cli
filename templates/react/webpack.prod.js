const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const config = require('./webpack.js')(true)

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    })

  ]
}