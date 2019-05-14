const merge = require('webpack-merge');
const common = require('./base.webpack.config');
const resolve = require('path').resolve;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watchOptions: {
        ignored: /node_modules/
    },

    output: {
        path: resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
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
        host: 'localhost',
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
                test: /\.scss$/,
                use: [
                    'style-loader',
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
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tsconfig: '../tsconfig.json',
            async: false,
        })
    ]
})