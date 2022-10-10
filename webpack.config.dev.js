const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

const developmentConfig = merge(commonConfig, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    port: 3001,
    historyApiFallback: true,
    devMiddleware: {
      publicPath: 'https://localhost:3000/dist/',
    },
    hot: 'only',
  },
});

module.exports = developmentConfig;
