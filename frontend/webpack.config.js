var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: '[name].js',
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',
       query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-class-properties"]
        }}, // to transform JSX into JS
{
				test: /\.css$/,
				loader: ['style-loader','css-loader','sass-loader']
			},{
			test: /\.(png|jpg|jpeg|gif|svg)$/,
			loader: 'url-loader'
			},	
			{
			 test: /\.(woff|woff2|ttf|svg|eot)$/,
			loader: 'url-loader'
		},
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
