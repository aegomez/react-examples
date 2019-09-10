// @ts-check

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

/** @type {webpack.Configuration} */
const config = {
  mode: 'development',
  cache: true,
  context: __dirname,
  entry: './tsx/app.tsx',
  output: {
    publicPath: 'js/',
    path: path.join(__dirname, '/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: /tsx/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                '@babel/preset-react'
              ],
              plugins: [
                'react-hot-loader/babel'
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
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
    hot: true
  }
};

module.exports = config;