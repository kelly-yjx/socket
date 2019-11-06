
const path = require('path')

function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
    devServer: {
        port: 8000,
        open: true
    },
    lintOnSave: false,

    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('./src')).set('components', resolve('./src/components'))
    }

}