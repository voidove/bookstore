const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, 'app'),
	entry: {
		app: './app.js'
	},
	output: {
		//path: path.resolve(__dirname, "build"),
		publicPath: "builds",
		filename: "bundle.js"
	},
	devServer: {
		historyApiFallback: true,
		//hot: true,
		inline: true
	},
	module: {
		
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			Mustache: 'mustache',
			_: 'lodash'
		})
	]
}