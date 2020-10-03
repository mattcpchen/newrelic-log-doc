import ProgressBarPlugin from 'progress-bar-webpack-plugin';


var config = {
  devtool: 'inline-source-map',
  entry:  __dirname + "/client/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [ /node_modules/, /all_online_xxx/, '/_online__all/_lib/' ],
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env']
      }
    }]
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new ProgressBarPlugin({ clear: false })
  ]
};






module.exports = config;
