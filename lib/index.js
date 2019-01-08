"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const fs = require("fs");
const tag = '[webpackBuilder]';
const defaultWebpackStats = {
    all: false,
    assets: true,
    builtAt: true,
    chunks: true,
    color: true,
    entrypoints: true,
};
const compile = function ({ callback, webpack, webpackBuildPath, webpackConfigPath, webpackStats = defaultWebpackStats, }) {
    let webpackConfig = undefined;
    try {
        webpackConfig = require(webpackConfigPath);
    }
    catch (err) {
        console.error(`${tag} error, webpack config is not found`, err);
        callback(new Error(err));
    }
    const compiler = webpack(webpackConfig);
    compiler.run((err, stats) => {
        console.log('%s NODE_ENV: %s, webpack Config: %j', tag, process.env.NODE_ENV, webpackConfig);
        if (err || stats.hasErrors()) {
            const errorMsg = stats.toString('errors-only');
            console.error(`${tag} compile error`, errorMsg);
            callback(new Error(errorMsg));
        }
        else {
            const info = stats.toJson(webpackStats);
            console.log(`${tag} compilation ${chalk_1.default.green('success')}:\n%o\n`, info);
            fs.writeFileSync(`${webpackBuildPath}/build.json`, JSON.stringify(info, null, 2));
            callback();
        }
    });
};
exports.default = compile;
