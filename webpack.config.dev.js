const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'inline-source-map',
  output: {
    ecmaVersion: 5,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      publicPath: false,
    },
  },
  entry: './app/app',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: true,
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
  ],
};
