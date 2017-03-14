## React概述及基础

### 1.1 React概述

#### 1.1.1 React前世今生

React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。

React是一个构建用户界面的javascript库，它因单向数据绑定和虚拟 DOM 两大特点在前端界大放异彩。
因为它解决了当下网页性能陷入的瓶颈—由于直接操作DOM导致页面性能损失很大。而虚拟DOM避免了直接操作DOM(Jquery 是一个典型的操作DOM的库，所以 React 开发中，我们尽量不要使用Jquery)。再加上 React 单向数据绑定的特点使得业务逻辑更加清晰可控。

目前React技术已经广泛的应用在国内各大互联网公司，百度贴吧，天猫，手Q等都充斥着大量React的影子。


#### 1.1.2 认识React生态圈

 时至今日，React 已不是一个库，也不是一个框架，而是一个庞大的体系。想要发挥它的威力，整个技术栈都要配合它改造。你要学习一整套解决方案，从后端到前端，都是全新的做法。 围绕以React为核心的技术栈也日益成型，它主要包含：
 
 - React
 - npm
 - js打包工具（如：webpack）
 - babel
 - ES6
 - Router
 - Redux
 - React Native

#### 1.1.3 React与其他框架的对比

目前前端界最热门的框架莫属`React` `Vue` `Angular`。框架本身并没有好坏之分，这里我们尽可能地公平和准确地来描述之间的联系与区别。

#### 应用场景

Angular，React，Vue，这三者其实面对的是同一个领域，那就是Web应用。这三者中，Angular的适用领域相对窄一些，一般用于大型的单页面系统。React与Vue非常相似，React可以拓展到服务端，移动端Native部分，而Vue因为比较轻量，还能用于业务场景非常轻的页面中，阿里目前也基于Vue推出了weex。

#### 开发体验

目前看来，React生态最强大，Vue的中文文档最完善`React+React-router+Redux`目前形成了一套成熟稳定的开发体验。对应的`Vue+VueX+Vue-router`也是官网推荐推荐的套餐。


### 1.2 React开发环境搭建

构建一个生产环境的React应用，是比较复杂的过程，涉及整套技术栈的改变。我们从基于`wepack``es6`从零开始搭建React开发环境。我们先来看看这个环境所依赖的包。

#### 1.2.1 开发环境依赖包简介

#### react.js

React是用来构建用户界面的js库，属于view层。 它有两大特点：1，单向数据绑定；2，虚拟DOM

#### react-dom.js

react.js 主要用来创建元素和组件，当你想在html中渲染你的组件的时候， 你还得需要react-dom.js。同时，react-dom.js依赖于react.js。

#### webpack

Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。webpack的详细配置见《附录一webpack入门配置》。以下是webapck的常用命令。

- webpack 最基本的启动webpack命令
- webpack -w 提供watch方法，实时进行打包更新
- webpack -p 压缩混淆脚本，这个非常非常重要！
- webpack -d 生成map映射文件，告知哪些模块被最终打包到哪里了,方便调试
- webpack --progress 显示打包进程，百分比显示
- webpack --config XXX.js //使用另一份配置文件来打包 
- webpack --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤
- webpack --profile 输出性能数据，可以看到每一步的耗时
- webpack --display-error-details 方便出错时能查阅更详尽的信息（比如 webpack 寻找模块的过程），从而更好定位到问题。
- webpack --display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块

##### webpack-dev-middleware

它是一个用来组织包装webpack使其变成中间件的容器。（中间件的用途就是在输入和输出的过程中加工的一种手段）
webpack本身只负责打包编译，webpack-dev-server是协助我们开发的服务器，这个服务器底层是靠express操作的。
我们的页面如何在这个服务器上更新呢，首先是取得webpack打包好的资源，这就需要在请求到响应的过程中通过
express的中间件取得资料， 而方法就是通过webpack-dev-middleware来实现。这个中间件只在开发环境中使用，切忌用在生产环境中。

这个中间件有两点好处：

- 直接在内存中操作文件，而非磁盘中。这样处理速度更快。
- 在监视（watch）模式下，如果文件改变，中间件立即停止提供之前的bundle，并且会延迟
请求回应，直到新的编译完成，如此一来，文件修改后，你可以直接刷新页面，而不用等待编译。


#### webpack-hot-middleware

webpack-dev-middleware + webpack-hot-middleware 即可让我们用 express 定制一个有热替换功能的 webpack 开发服务器。

#### express

基于 Node.js 平台，快速、开放、极简的 web 开发框架。
在这里用于配置开发服务器。

#### webpack-hot-middleware

webpack-dev-middleware + webpack-hot-middleware 即可让我们用 express 定制一个有热替换功能的 webpack 开发服务器。

#### babel-core

Babel是一个转换编译器，它能将ES6转换成可以在浏览器中运行的代码。作为下一代javascript语言标准，请拥抱ES6/ES7吧！babel-core 是Babel编译器的核心。

#### babel-loader

loader 用于转换应用程序的资源文件，他们是运行在nodejs下的函数，使用参数来获取一个资源的来源并且返回一个新的来源针对webpack的babel加载器。babel-loader 就是告诉webpack去加载我们写的使用了es6语法的js文件。

#### babel-runtime

Babel默认只转换新的JavaScript语法，而不是转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect，Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

#### babel-preset-latest

es2015,es2016,es2017转码规则。为所有es6插件所设置的babel预设，有了它，诸如，es6的箭头函数，类，等等语法特性才能向es5转换。

#### babel-preset-react

react转码规则。为所有react插件所设置的babel预设。有了它，才能识别转译jsx语法等。

#### react-hot-loader

可以使react组件在浏览器上实时更新而无需手动刷新。

#### babel-preset-stage-X

ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个在进行实际开发时，可以根据需要来设置对应的stage。一般设置为stage-0即可。


#### 1.2.1 开发环境服务搭建

根据上述插件，我们配置好我们的`package.json`。

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "demo-react",
  "main": "index.js",
  "scripts": {
    "start": "babel-node server.js"
  },
  "keywords": [
    "react"
  ],
  "dependencies": {
    "babel-runtime": "^6.20.0",
    "react": "^15.4.1",
    "react-dom": "^15.4.1"
  },
  "devDependencies": {
    "babel-cli": "^6.11.4",
    "babel-core": "^6.10.4",
    "babel-loader": "^6.2.4",
    "babel-plugin-transform-runtime": "^6.15.0",
    "babel-preset-latest": "^6.16.0",
    "babel-preset-react": "^6.11.1",
    "babel-preset-stage-0": "^6.5.0",
    "express": "^4.14.0",
    "html-webpack-plugin": "^2.28.0",
    "react-hot-loader": "^3.0.0-beta.6",
    "redbox-react": "^1.2.10",
    "rimraf": "^2.5.3",
    "webpack": "^1.13.1",
    "webpack-dev-middleware": "^1.6.1",
    "webpack-hot-middleware": "^2.12.1"
  },
  "author": "younth",
  "license": "ISC"
}

```

注意我们的启动脚本为`bable-node`，这里不用`node server.js`是为了兼容node7.0以下版本，这样我们在server.js里面可以用`ES6/ES7`语法了。


`server.js`提供一个本地服务器：

```js

// 本地开发server 能力

const path = require('path');
import webpack from 'webpack';// es6 import
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack-dev-config';

// express server
const app = new (require('express'))();
const port = 3000; // 监听的端口是3000 locahost:3000
const compiler = webpack(config);

// dev中间件
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, // 不显示编译信息
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
```

server.js里面用到了webpack的配置文件，接下来我们来看看我们的webpack配置文件信息。

```
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
```

### 1.3 编写第一个React程序

上一节我们配置好了基于`webpack`的本地开发环境，现在我们开始编写我们的react程序。

首先我们需要一个入口模板文件，我们定义为`index.html`。

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>react+webpack</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>

```

我们还需要一个入口的js文件，定义为`src/index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

此时我们在命令行执行`npm start`，可以看到服务启动成功，日志大概如下：

```bash
> babel-node server.js

==> 🌎  Listening on port 3000. Open up http://localhost:3000/ in your browser.
webpack built 568350eb29d91d08cc44 in 4124ms
```

我们打开浏览器，输入`localhost:3000`即可看到Rect的第一个程序了！

