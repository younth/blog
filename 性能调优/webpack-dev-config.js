/**
 * 开发模式下的webpack配置
 */

const path = require('path');
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {

  devtool: 'cheap-module-eval-source-map',
  // devtool 指明了sourcemap的生成方式，它有七个选项，具体请参考 https://segmentfault.com/a/1190000004280859
  // sourcemap 的作用就是为调试代码提供便利
  // cheap-module-eval-source-map 绝大多数情况下都会是最好的选择，这也是下版本 webpack 的默认选项。

  entry: [
    'react-hot-loader/patch',
    // reload
    'webpack-hot-middleware/client?reload=true',
    // 这里reload=true的意思是，如果碰到不能hot reload的情况，就整页刷新。
    // index.js会自动注入我们模板
    path.resolve(__dirname, 'src/index.js') // 打包的入口 可以是多页 多页最后就是 page1.bundle.js 和 page2.bundle.js
  ],
  // 页面入口文件配置

  output: { // output项告诉webpack怎样存储输出结果以及存储到哪里
    filename: 'bundle.js',

    path: path.join(__dirname, 'dist'),
    // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    // “path”仅仅告诉Webpack结果存储在哪里

    publicPath: ''
    //模板、样式、脚本、图片等资源对应的server上的路径
    // “publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。
  },
  // 文件输出目录

  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  // 实际就是自动添加后缀，默认是当成js文件来查找路径
  // 空字符串在此是为了resolve一些在import文件时不带文件扩展名的表达式

  module: {
    // babel
    loaders: [
      {
        test: /\.jsx?$/, // 匹配'js' or 'jsx' 后缀的文件类型
        loaders: ['babel'],
        exclude: /node_modules/,// 排除某些文件
        include: __dirname
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 启用热替换,仅开发模式需要

    new webpack.NoErrorsPlugin(),// 允许错误不打断程序，,仅开发模式需要
    
    // index.html  index.js会注入
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
        inject: true
    })
  ]
};