var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname,'src/client/app');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: BUILD_DIR + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

var config = {
    entry: APP_DIR + '/index.jsx',
    // ref: http://stackoverflow.com/questions/33272967/how-to-make-the-webpack-dev-server-run-on-port-80-and-on-0-0-0-0-to-make-it-publ
    //      https://webpack.github.io/docs/webpack-dev-server.html
    // entry: [
    //     'webpack-dev-server/client?http://devthai4.webon.net:8082',
    //     APP_DIR + '/index.jsx'
    // ],
    // devServer: {
    //     host: 'devthai4.webon.net',
    //     port: 8082,
    // },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;
