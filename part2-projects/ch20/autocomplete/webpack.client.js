// @ts-check

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/** @type { import('webpack').Configuration } */
const config = {
  entry: './src/app.tsx',
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'app.js'
  },
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
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