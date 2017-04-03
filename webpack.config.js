var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    context: __dirname + "/src",
    entry: './index.ts',
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'awesome-typescript-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    devtool: 'source-map',

    plugins: [new HtmlWebpackPlugin({
        title: 'Hello RxJS',
        filename: __dirname + '/index.html',
        template: './index.html',
        inject: 'body'
    })],

    devServer: {
        contentBase: __dirname,
        port: 9001,
        publicPath: '/dist',
        filename: '[name].bundle.js',
        watchContentBase: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
}