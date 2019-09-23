// @ts-check

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

/** @type { import('webpack').Configuration } */
const config = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'server.js'
  },
  mode: 'development',
  target: 'node',
  externals: [
    nodeExternals()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true
        }
      }
    }]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};

module.exports = config;