let config = require('./webpack.js')(false)

config.devServer = {
  contentBase: './build/',
  hot: true,
  publicPath: '',
  open: true,
}

module.exports = config