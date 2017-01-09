var webpack = require('webpack');
var path = require('path');

// directory path of React application's codebase
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
// directory path of the bundle output file
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry:
    // where the program begins / main
    path.join(APP_DIR, 'index.jsx'),
  // where to place bundle dependencies
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  // use babel-loader when bundling files
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  },

};

module.exports = config;
