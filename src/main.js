import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import Style from './styles/style.css';
import App from './App.vue'
import OuterLayout from './layouts/OuterLayout.vue';
import vuetify from './plugins/vuetify';
import router from './router/router';
import store from './store';
import i18n from './i18n';
import frag from 'vue-frag';

Vue.config.productionTip = false;

Vue.directive('frag', frag);

Vue.component('outer-layout', OuterLayout);

Vue.use(VueTheMask);

const NEED_LOGIN = false;

if (NEED_LOGIN) {
  router.beforeEach(async (to, from, next) => {
    //
  });
}

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
