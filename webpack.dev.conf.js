/*
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-11 17:07:14
 * @LastEditTime: 2021-10-17 20:24:42
 * @LastEditors: MArio
 */
'use strict'
var express = require('express')
var webpack = require('webpack');

var app = express()
var apiRoutes = express.Router()
app.use('/api', apiRoutes)
module.exports = {
    dervServer: {

    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
}
