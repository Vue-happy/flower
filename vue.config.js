const path = require('path')
function resolve (dir) {
  return path.join(__dirname,  dir)
}
module.exports = {
  // 运行时包含编译器的版本
  runtimeCompiler: true,

  // 关闭ESLint编译
  lintOnSave: false,

  configureWebpack : {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
      }
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
    }
  },

  // 配置代理服务器
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { //路径重写
          '^/api': '', // rewrite path
        }
      }
    },
  //   proxy: {
  //     '/api': {
  //         target: 'http://127.0.0.1:5000/api/',
  //         changeOrigin: true,
  //         pathRewrite: {
  //             '^/api': ''
  //         }
  //     }
  // },
  }

}
