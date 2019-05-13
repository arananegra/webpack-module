const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const resolve = require('path').resolve;
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    mode: 'development',

    target: "web",

    optimization: {
        splitChunks: {
            name: false,
            cacheGroups: {
                vendors: {
                    name: 'vendor',
                    test: /vendor$/,
                    chunks: 'initial',
                    enforce: true
                }
            },
        },
    },
    node: {
        fs: "empty",
        net: "empty"
    },
    entry: {
        styles: './scss/index.scss',
        vendor: ['react', 'react-dom'],
        app: [
            '../index.tsx'
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css'
        ]
    },
    output: {
        path: resolve('dist'),
        filename: '[hash].[name].js',
        publicPath: '/'
    },

    watchOptions: {
        ignored: /node_modules/
    },

    devServer: {
        stats: {
            hash: false,
            version: false,
            timings: true,
            assets: true,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: true,
            publicPath: true
        },
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: './dist',
        inline: true,
        host: '0.0.0.0',
        port: 3002,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
        }
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: {
                                safe: true
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
                use: "url-loader?limit=10000"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.mp4$|\.wav$|\.mp3$/,
                use: 'file-loader?name=./assets/[name].[ext]'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            chunksSortMode: 'none',
            filename: 'index.html', //Name of file in ./dist/
            template: 'index.html', //Name of template in ./src
            hash: true
        })
    ]
};