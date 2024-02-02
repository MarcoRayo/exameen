import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
