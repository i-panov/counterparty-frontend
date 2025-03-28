"use strict";
var path = require("path");
var webpackMerge = require('webpack-merge');
var commonConfig = require('./base.webpack.config');
module.exports = function (env) {
    return webpackMerge(commonConfig, {
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            port: 8080,
            inline: true,
            stats: {
                cached: false
            },
            historyApiFallback: true,
        },
        devtool: "inline-source-map"
    });
};
//# sourceMappingURL=dev.webpack.config.js.map