const path = require('path')
const root = __dirname
const webpack = require('webpack')
// 引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件
  entry: [
  'react-hot-loader/patch', // 激活HMR
  'webpack-dev-server/client',
  'webpack/hot/only-dev-server',
  path.resolve(root, 'src/main.js')
  ],
  // 出口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },
  // loaders
  module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(root, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
  ],
  devServer: {
    hot: true, // 激活服务器的HMR
    contentBase: path.resolve(root, 'dist'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true
  }
}