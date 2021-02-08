const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/App.js',
    plugins: [new HtmlWebpackPlugin({template: "./public/index.html"})],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 2000,
            minRemainingSize: 0,
            maxSize: 200,
            minChunks: 10,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 5000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true
                },
                default: {
                    minChunks: 10,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: 'all',
                    enforce: true,
                    name: 'common'
                }
            }
        }
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }

        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        compress: true,
        port: 9000
    }
};