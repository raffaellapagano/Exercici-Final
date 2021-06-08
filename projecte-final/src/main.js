import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animate from 'animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  animate,
  render: h => h(App)
}).$mount('#app');

