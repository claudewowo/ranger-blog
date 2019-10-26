/*!
 * @author claude
 * date 07/05/2019
 * webpack dev 配置
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { webpackConfig } = require('./webpack.common.js');

const resolve = (dir) => path.resolve(__dirname, dir);

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
];

const proxy = {
    '/api/': {
        target:       'http://127.0.0.1:3101',
        changeOrigin: true,
        /* pathRewrite:  {
            '^/api': '',
        }, */
    },
};

const devServer = {
    mode:      'development',
    devtool:   '#source-map',
    devServer: {
        compress:           true,
        historyApiFallback: true,
        contentBase:        resolve('../../../dist/backend'),
        host:               '127.0.0.1',
        port:               3101,
        hot:                true,
        open:               true,
        progress:           false,
        quiet:              true,
        overlay:            {
            warning: true,
            errors:  true,
        },
        proxy,
    },
    watchOptions: {
        ignored: [
            'node_modules',
            resolve('../../frontend'),
            resolve('../../covers'),
        ],
    },
    plugins,
};

module.exports = merge(webpackConfig, devServer);
