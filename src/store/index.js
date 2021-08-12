import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import general from './general';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    general,
  },
});
