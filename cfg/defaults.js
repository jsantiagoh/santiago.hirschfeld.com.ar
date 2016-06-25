/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;
const host = '0.0.0.0'

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.sass/, loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax' },
      { test: /\.scss/, loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded' },
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.styl/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.(png|jpg|gif|woff|woff2)$/, loader: 'url-loader?limit=8192' },
      { test: /\.(mp4|ogg|svg)$/, loader: 'file-loader' },


      // { test: /\.js[x]?$/, loaders: ['babel-loader?presets[]=es2015&presets[]=react'], exclude: /(node_modules|bower_components)/},
      // { test: /\.css$/, loaders: ['style', 'css'] },
      // { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      // { test: /\.less$/, loaders: ['style', 'css', 'less'] },
      { test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]" },
      { test: /\.woff2$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]" },
      { test: /\.(eot|ttf|svg|gif|png)$/, loader: "file-loader" }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
