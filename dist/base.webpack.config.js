"use strict";
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    context: path.resolve(__dirname, "./app"),
    entry: "./index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                enforce: "pre",
                use: "tslint-loader"
            }, {
                test: /\.ts(x?)$/,
                use: "ts-loader"
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            }]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"
        }),
        new ExtractTextPlugin("style.css"),
    ]
};
//# sourceMappingURL=base.webpack.config.js.map