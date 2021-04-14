import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'

import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import './utils/permission'
import './utils/error-log'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
