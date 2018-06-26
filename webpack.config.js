/**
 * webpack 配置文件
 */

const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/js/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};