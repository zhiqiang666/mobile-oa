const path = require('path')
const resolve = dir => path.join(__dirname, dir)
// 是否为测试环境
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/office-park' : '/'
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c',resolve('src/components'))
  },
  productionSourceMap:false,
  devServer:{
    proxy:'http://localhost:3000'
  }
}
