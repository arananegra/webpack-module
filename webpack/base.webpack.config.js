const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
    },
    target: "web",
    node: {
        fs: "empty",
        net: "empty"
    },
    entry: {
        //https://webpack.js.org/concepts/entry-points/#separate-app-and-vendor-entries
        app: [
            '../index.tsx'
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css'
        ]
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.otf($|\?)|\.ttf($|\?)|\.eot($|\?)/,
                use: "url-loader?limit=10000"
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.mp4$|\.wav$|\.mp3$/,
                use: 'file-loader?name=[name].[hash].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: 'index.html', //Name of template in ./src
            hash: true
        }),
    ]
};