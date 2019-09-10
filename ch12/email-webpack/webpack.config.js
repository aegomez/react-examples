// @ts-check

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

/** @type {webpack.RuleSetUse} */
const babelLoader = {
  loader: 'babel-loader',
  options: {
    "presets": [
      "@babel/preset-react"
    ]
  }
};

/** @type {webpack.Configuration} */
const config = {
  cache: true,
  // context: __dirname,
  entry: './tsx/app.tsx',
  output: {
    path: path.join(__dirname, '/js'),
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          babelLoader
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};

module.exports = config;