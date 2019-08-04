const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const spinner = ora('构建编译中...');
const webpackProdConfig = require('./webpack.prod');

spinner.start();

// 编译开始
webpack(webpackProdConfig, (err, stats) => {
    spinner.stop();
    if (err) throw err;

    console.log(stats.toString({
        chunks: false,  // 使构建过程静默无输出
        colors: true,    // 在控制台展示颜色
    }));

    if (stats.hasErrors()) {
        console.log(chalk.red('\n编译失败 😭 😭 😭 (Build Failure).\n'));
        process.exit(1);
    }

    console.log(chalk.cyan('\n编译成功 😉 😉 😉 (Build Success)！！！ .'));
});
