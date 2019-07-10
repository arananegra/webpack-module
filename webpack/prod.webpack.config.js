const webpack = require("webpack");
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./base.webpack.config');
const resolve = require('path').resolve;
const CompressionPlugin = require('compression-webpack-plugin');
const dotenv = require('dotenv-webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const faviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-source-map',
    output: {
        path: resolve('dist'),
        filename: '[name].[chunkhash].js',
        //publicPath: '/'
    },

    performance: {
        hints: false,
    },
    optimization: {
        minimize: true,
        //https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },

    plugins: [
        new dotenv({
            path: './prod.env'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css"
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),

        new webpack.HashedModuleIdsPlugin(),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.jsx$|\.ts$|\.tsx$|\.scss$|\.css$|\.html$/,
            threshold: 1024,
            minRatio: 0.8,
        }),

        new SWPrecacheWebpackPlugin(
            {
                cacheId: 'app-cache-id',
                dontCacheBustUrlsMatching: /\.\w{8}\./,
                filename: 'service-worker.js',
                staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
            }
        ),
        new WebpackPwaManifest({
            name: 'Webpack React PWA example',
            short_name: 'React PWA',
            description: 'Example of usage a webpack to create a PWA',
            display: "standalone",
            background_color: '#0d1f22',
            theme_color: '#0d1f22',
            start_url: '/',
            icons: [
                {
                    src: path.resolve('./assets/images/logo.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                    destination: path.join('pwa-assets', 'icons')
                }
            ]
        }),
        new faviconsWebpackPlugin({
            logo: path.resolve('./assets/images/favicon.ico'),
            persistentCache: false,
        })
    ]
});