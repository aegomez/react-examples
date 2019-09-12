// @ts-check

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

/** @type {webpack.Configuration} */
const config = {
  mode: 'production',
  cache: true,
  context: __dirname,
  entry: './tsx/app.tsx',
  output: {
    path: path.join(__dirname, '/js'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      include: /tsx/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              '@babel/preset-react'
            ]
          }
        },
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true
          }
        }
      ]
    }]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ]
};

module.exports = config;