import Vue from 'vue';

export default Vue.mixin({
  data() {
    return {
      languages: ['hu-HU', 'en-EN'],
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    detectLanguage() {
      let language = localStorage.getItem('language');
      if (!language) {
        language = navigator.language;
        localStorage.setItem('language', navigator.language);
      } else {
        // console.log('van nyelvi token');
      }
      if (language === 'hu' || language === 'hu-HU') {
        this.$i18n.locale = 'hu-HU';
        this.$vuetify.lang.current = 'hu';
      } else {
        this.$i18n.locale = 'en-EN';
        this.$vuetify.lang.current = 'en';
      }
    },
    /**
     *
     * Nyelv változtatása
     *
     * @param lang hu-HU, en-EN stb
     */
    changeLanguage(lang) {
      if (this.languages.includes(lang)) {
        localStorage.setItem('language', lang);
        this.$i18n.locale = lang;
        this.$vuetify.lang.current = lang.substring(0, 2);
      } else {
        // console.log('nem támogatott nyelv');
      }
    },
  },
});
