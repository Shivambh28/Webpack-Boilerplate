var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'app/build');
var DEV_DIR = path.resolve(__dirname, 'app/src');

var config = {
	context: DEV_DIR,
	entry: {
		javascript: DEV_DIR + "/assets/js/app.js",
		html: DEV_DIR + "/index.html",
	},
	output: {
		path: BUILD_DIR,
		filename: 'assets/js/bundle.js',
		html: BUILD_DIR + "/index.html",
	},
	devtool: 'eval-source-map',
	module : {
	loaders : [
		{
			test : /\.js?/,
			include : DEV_DIR,
			exclude: /node_modules/,
			loaders: ["babel-loader"]
		},
	  	{
		  	test: /\.html$/, 
		  	loader: "file?name=[path][name].[ext]"
		},
		{
	        test   : /\.css$/,
	        loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
	    }, 
	    {
	        test   : /\.scss$/,
	        loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      	}
	]},
	"scripts": {
		"dev": "webpack -d --watch",
		"build" : "webpack -p"
	}
};

module.exports = config;