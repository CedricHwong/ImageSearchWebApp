// const buildAssetsPublicPath = `/main/`
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  publicPath: './',
  lintOnSave: true,
  productionSourceMap: false,

  configureWebpack: {
    //注释console
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              // warnings: false,
              drop_console: false, //注释console
              drop_debugger: false,
              pure_funcs: ['console.log'] //移除console
            }
          }
        })
      ]
    }
  },
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    })
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
    // entry
    //   .add('@/mock')
    //   .end()
  },
  devServer: {
    // port: 58298,
    port: 51888,
    proxy: {
      "/api": {
        target: 'http://127.0.0.1:5000',
        ws: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
}
