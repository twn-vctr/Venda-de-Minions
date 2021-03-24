/* exports default {

}
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: "/",
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    devtool: "source-map"

};

