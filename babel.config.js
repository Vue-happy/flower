module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //使用vant组件库
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
