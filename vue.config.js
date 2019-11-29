const path = require('path')
const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37.5   // 设计稿等分后的rem值   750/10 = 75
})



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

  
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },

 //配置代理服务器
devServer: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: { //路径重写
        '^/api': '', // rewrite path
      }
    }
  }

//   // pluginOptions: {
//   //   i18n: {
//   //     locale: 'en',
//   //     fallbackLocale: 'en',
//   //     localeDir: 'locales',
//   //     enableInSFC: true
//   //   }
//   // }
}
}
