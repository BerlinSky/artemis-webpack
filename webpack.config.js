const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./libs/parts');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

const common = {
	entry: {
		app: PATHS.app
	},
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Artemis Webpack'
		}),
		new FaviconsWebpackPlugin('./app/favicon.png')
	]
};

// separate the configurations:
var config;
switch(process .env.npm_lifecycle_event) {
	case 'build':
		// config = merge(common, {});
		config = merge(
      common,
      {
      	devtool: 'source-map'
      },
	    parts.minify(),
      parts.setupCSS(PATHS.app),
      parts.loadJS(PATHS.app),
      parts.lintJS(PATHS.app)
    );
		break;
	default:
		config = merge(
      common,
      {
      	devtool: 'eval-source-map'
      },
      parts.setupCSS(PATHS.app),
      parts.loadJS(PATHS.app),
	    parts.devServer({
	      // Customize host/port here if needed
	      host: process.env.HOST,
	      port: process.env.PORT
	    })
	  );
}

// validate the config settings:
module.exports = validate(config);

