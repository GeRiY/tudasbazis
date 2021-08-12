module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Vue skeleton'
        return args
      })
  },

  pluginOptions: {
    i18n: {
      locale: 'hu',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
