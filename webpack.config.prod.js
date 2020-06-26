const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devtool: false,
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 1324000,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  output: {
    ecmaVersion: 5,
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
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env',
      silent: true,
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
    new CompressionPlugin(),
  ],
};
