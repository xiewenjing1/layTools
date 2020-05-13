 const path = require("path");
 const webpack = require("webpack");

 module.exports = {
     devtool: 'source-map',
     entry: "./src/index.js",//入口文件，src目录下的index.js文件，
     output: {
         path: path.resolve(__dirname, './dist'),//输出路径，就是新建的dist目录，
         publicPath: '/dist/',
         filename: '[name].js',
         libraryTarget: 'umd',
         umdNamedDefine: true
     },
     module: {
         rules: [
             {
                 test: /\.less$/,
                 use: [
                     { loader: "style-loader" },
                     { loader: "css-loader" },
                     { loader: "less-loader" }
                 ]
             },
             {
                 test: /\.js$/,
                 exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                 loader: 'babel-loader'
             },
             {
                 test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
                 loader: 'url-loader',
                 query: {
                     limit: 30000,
                     name: '[name].[ext]?[hash]'
                 }
             }
         ]
     },
 }