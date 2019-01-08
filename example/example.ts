import path from 'path';
import webpack from 'webpack';
import webpackBuilder from '../lib';

webpackBuilder({
  callback: () => console.log(123),
  webpack,
  webpackBuildPath: path.resolve(__dirname, 'dist'),
  webpackConfigPath: path.resolve(__dirname, './webpack.config.js'),
});
