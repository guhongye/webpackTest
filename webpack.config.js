module.exports = {
	entry: __dirname + "/app/main.es6", 
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015','react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules'
			}
		]
	}
}