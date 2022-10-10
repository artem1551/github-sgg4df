const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

const developmentConfig = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './src/'),
    port: 3001,
    historyApiFallback: true,
    publicPath: 'http://localhost:3001',
    hotOnly: true,
  },
});

module.exports = developmentConfig;
