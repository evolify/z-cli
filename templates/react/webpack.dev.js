const config = require('./webpack.js')

module.exports = {
  ...config,
  devServer: {
    contentBase: './build/',
    publicPath: ''
  }
}