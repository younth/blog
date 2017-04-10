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