import Vue from 'vue'
import App from './App.vue'
import { VueHammer } from 'vue2-hammer';

Vue.use(VueHammer);

import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
