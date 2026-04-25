const { merge } = require("webpack-merge");

const commonConfig = require('./webpack.common.config.js');

const productionConfig = require('./webpack.production.config.js');

const developmentConfig = require('./webpack.developmnet.config.js');

module.exports = function (enc) { 
    if (enc.development) {
        return merge(commonConfig, developmentConfig);
    }
    else{
        return merge(commonConfig, productionConfig);
    }
}