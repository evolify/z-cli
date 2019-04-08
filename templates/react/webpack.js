const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (prod = true) => {
  const styleLoader = loaders => [
    prod ? MiniCssExtractPlugin.loader : 'style-loader',
    ...loaders
  ]

  return {
    mode: prod ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: prod ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      publicPath: '',
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: styleLoader(['css-loader'])
      }, {
        test: /\.scss$/,
        use: styleLoader(['css-loader', 'sass-loader'])
      }, {
        test: /\.(jpe?g|png|gif|bmp|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024,
            name: prod ? 'img/[name].[contenthash:8].[ext]' : '[name].[ext]',
          },
        }
      }, {
        test: /\.(svg|eot|woff|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: prod ? 'font/[name].[contenthash:8].[ext]' : '[name].[ext]',
          }
        }
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html')
      })
    ]
  }
}