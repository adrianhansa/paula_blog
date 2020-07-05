import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'material-design-icons/iconfont/material-icons.css'
import { auth } from '@/firebase/init'

Vue.config.productionTip = false

let app = null

Vue.filter("preview", (value, size) => {
  if (value.length > size) {
    return `${value.substring(0, size)} ...`
  } else {
    return value.substring(0, size)
  }
})


auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})