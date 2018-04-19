import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import store from './store'
import { currency } from './currency'
import router from './router.js'

Vue.use(VueRouter)
Vue.filter('currency', currency)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
