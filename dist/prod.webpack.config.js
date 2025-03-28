"use strict";
var webpack = require("webpack");
var webpackMerge = require('webpack-merge');
var commonConfig = require('./base.webpack.config');
module.exports = function (env) {
    return webpackMerge(commonConfig, {
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    });
};
//# sourceMappingURL=prod.webpack.config.js.map