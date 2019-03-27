const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js',
    publicPath: '',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader'
    }]
  },
  resolve:{
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}