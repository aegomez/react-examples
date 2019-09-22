// @ts-check

const path = require('path');
const webpack = require('webpack');

/** @type {webpack.Configuration} */
const config = {
  mode: 'production',
  // cache: true,
  entry: './src/client/app.tsx',
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.tsx?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: '/node_modules/',
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true
        }
      }
    }]
  }
};

module.exports = config;