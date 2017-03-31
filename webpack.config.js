/*
  Webpack Compiler part of the React Boilerplate
*/
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client')
const config = {
  entry: [
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // process files with .js and .jsx extensions
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'client')
      },
      {
        // process stylesheet files
        test: /\.css?$/,
        loaders: ['css'],
        include: path.join(__dirname, 'client')
      },
      {
        // process Image
        test: /\.(jpg|png)$/,
        loader: 'file-loader?name=assets/[name].[ext]'
      }
    ]
  }
};

module.exports = config;
