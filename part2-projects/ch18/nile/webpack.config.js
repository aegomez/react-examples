// @ts-check

const path = require('path');

/** @type { import('webpack').Configuration } */
const config = {
  entry: './src/app.tsx',
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'bundle.js'
  },
  mode: 'development',
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
  }
};

module.exports = config;