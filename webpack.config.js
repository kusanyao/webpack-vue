/**
 * webpack 配置文件
 */

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/js/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg)/, 
                use: [
                    { loader: 'url-loader', options: {limit: 500000}}
                ]
            },
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],  
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};