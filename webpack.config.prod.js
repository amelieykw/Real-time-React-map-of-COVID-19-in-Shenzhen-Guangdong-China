const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist/frontend'),
    publicPath: '',
  },
});
