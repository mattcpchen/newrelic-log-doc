var path = require('path');
var express = require('express');
var webpack = require('webpack');


module.exports = function() {
  var app = express();
  app.set('port', process.env.PORT || 3301);

  // webpack with HMR
  var webpackConfig = require('../webpack.config.babel');
  var compiler = webpack(webpackConfig);
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));


  // static routes
  app.use(express.static( path.join(__dirname, '../public/') ));
  app.use(express.static( path.join(__dirname, '../dist/') ));


  // routes
  app.get('/', (req, res)=> {
    var indexHtmlPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexHtmlPath);
  });


  return app;
};
