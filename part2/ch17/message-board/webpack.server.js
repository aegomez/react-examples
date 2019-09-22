// @ts-check

const path = require('path');
const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');

/** @type {webpack.Configuration} */
const config = {
  mode: 'development',
  // cache: true,
  // context: __dirname,
  entry: './src/server.ts',
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  target: 'node',
  externals: [nodeExternals({whitelist: ['react', 'react-dom']})],
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