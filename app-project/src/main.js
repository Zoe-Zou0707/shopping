// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import Vuex from 'vuex'
// 引入axios
import axios from 'axios'
// import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(ElementUI)
// 挂载在Vue的原型上
Vue.prototype.axios = axios
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
