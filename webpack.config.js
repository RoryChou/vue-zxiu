/**
 * Created by Administrator on 2017/2/6.
 */
var webpack  = require('webpack');
var path  = require('path');

module.exports = {
    entry: {
        bundle: './src/main.js',
        vendor: ['vue','vue-router','vue-resource']
    },
    output:{
        path: __dirname + '/dist',
        filename:'bundle.js',
        chunkFilename: "[vendor].js"
    },
    module: {
        loaders: [
            {test:/\.vue$/,loader:'vue-loader'}
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ]
}
