import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import i18n from '@/i18n';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#2997FF',
        secondary: '#333333',
        accent: '#e84393',
        error: '#d63031',
        info: '#00cec9',
        success: '#4CAF50',
        warning: '#F9A825',
      },
    },
  },
});
