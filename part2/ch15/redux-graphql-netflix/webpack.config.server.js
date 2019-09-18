// @ts-check

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

const { PWD } = process.env;

/** @type {webpack.Configuration} */
const config = {
  /* mode: 'production', */
  cache: true,
  context: __dirname,
  entry: './server/index.ts',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js'
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.mjs', '.js']
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ],
  // devServer: {
  //   contentBase: path.join(__dirname, 'build'),
  //   port: 9000
  // },
  module: {
    rules: [{
      test: /\.ts$/,
      include: path.resolve(PWD, 'server'),
      exclude: '/node_modules/',
      use: [
        // {
        //   loader: 'babel-loader',
        //   options: {
        //     babelrc: false,
        //     presets: [
        //       '@babel/preset-react'
        //     ]
        //   }
        // },
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true
          }
        }
      ]
    }]
  }
};

module.exports = config;