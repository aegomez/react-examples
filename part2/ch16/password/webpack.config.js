// @ts-check

const path = require('path');
const webpack = require('webpack');

/** @type {webpack.Configuration} */
const config = {
  /* mode: 'production', */
  cache: true,
  entry: './tsx/app.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
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