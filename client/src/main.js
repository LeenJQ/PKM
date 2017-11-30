import Vue from 'vue'
import App from './App'
import router from './router'
import registerComponent from './components/plugins/'
import './api/interceptor'    // axios 拦截器
import './assets/normal.css'
import './assets/index.css'

Vue.config.productionTip = false

registerComponent(Vue)  // 注册全局组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
