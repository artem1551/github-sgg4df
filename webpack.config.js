const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: 'file-loader?name=images/[name].[ext]',
      },

      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require.resolve('sass'),
            },
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
};
