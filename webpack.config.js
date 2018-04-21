const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entries = getEntry('src/js/*.js', 'src/js/');
const chunks = Object.keys(entries);
const config = {
	entry: entries,
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath:'',
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.json$/,
				loader: 'file-loader',
				query:{
					name: 'json/[hash].[ext]',
					publicPath:'../',
					limit: 1
				}
			},
			{
				test: /\.css$/,
				use:
					ExtractTextPlugin.extract({fallback:'style-loader', use:'css-loader?minimize'})
			},
			{
				test: /\.scss$/,
				use:
					ExtractTextPlugin.extract(
						{
							use:'css-loader?minimize!sass-loader',
                            publicPath: "../"
						}
						)
			},
            {
                test: /\.js|jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react','es2015']
                }
            },
			{
				test: /\.html$/,
				use: "html-loader?attrs=img:src img:data-src"
			},
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options:{
                    name:'fonts/[hash].[ext]'
                }
    		},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'images/[hash].[ext]',
						limit: 2
					}
				}
			}
		]
	},
	plugins: [

		new CommonsChunkPlugin({
			name: 'vendor',
            minChunks: function (module) {
                if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
                    return false;
                }
                return module.context && module.context.indexOf("node_modules") !== -1;
            }
		}),
		new ExtractTextPlugin('css/[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin({
            test: [/\.js$/, /\.jsx$/],
			exclude: 'vendor',
            filename: "js/[name].js.map",
            append: "//# sourceMappingURL=[url]",
            moduleFilenameTemplate: '[resource-path]',
            fallbackModuleFilenameTemplate: '[resource-path]'
        })
	],
	devServer: {
        proxy: {
            "/listmap": {
                target: "http://localhost:3030"
            },
            "/detail": {
                target: "http://localhost:3030"
            }
        },

        // // package.json 里面的test需要改成 "webpack-dev-server  --history-api-fallback --config webpack.config.js --content-base build/",
        historyApiFallback:{
            index:"http://localhost:3030"
        },
		contentBase: path.join(__dirname, "dist"),
		inline: true,
		hot: false,
		// host: "10.4.66.95",
		port: 9880
	}
};
const pages = Object.keys(getEntry('src/**/*.html', 'src/'));
pages.forEach(function(pathname) {
    let conf = {
		filename: pathname + '.html',
		template: 'src/' + pathname + '.html',
		minify: {
			removeComments: true,
			collapseWhitespace: true
		}
	};
	if (pathname in config.entry) {
		conf.inject = 'body';
		conf.chunks = ['vendor', pathname];
		conf.hash = true;
	}
	config.plugins.push(new HtmlWebpackPlugin(conf));
});

module.exports = config;
function getEntry(globPath, pathDir) {
    let files = glob.sync(globPath);
    let entries = {},
		entry, dirname, basename, pathname, extname;

	for (let i = 0; i < files.length; i++) {
		entry = files[i];
		dirname = path.dirname(entry);
		extname = path.extname(entry);
		basename = path.basename(entry, extname);
		pathname = path.normalize(path.join(dirname,  basename));
		pathDir = path.normalize(pathDir);
		if(pathname.startsWith(pathDir)){
			pathname = pathname.substring(pathDir.length)
		}
		entries[pathname] = ['./' + entry];
	}
	return entries;
}