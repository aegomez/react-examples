// @ts-check

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

/** @type {webpack.Configuration} */
const config = {
  /* mode: 'production', */
  cache: true,
  context: __dirname,
  entry: './client/index.tsx',
  output: {
    path: path.join(__dirname, 'build', 'public'),
    filename: '[name].js'
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  // devServer: {
  //   contentBase: path.join(__dirname, 'build'),
  //   port: 9000
  // },
  module: {
    rules: [{
      test: /\.tsx?$/,
      include: path.resolve(__dirname, 'client'),
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
    }, {
      test: /\.css$/,
      exclude: '/node_modules/',
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]__[hash:base64:5]'
            }
          }
        }
      ]
    }]
  }
};

module.exports = config;