import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Home from '../src/pages/Home'
import Sort from '../src/pages/Sort'
import Cart from '../src/pages/Cart'
import Profile from '../src/pages/Profile'
import Login from '../src/pages/Login'

//Vue全局注册组件的语法:Vue
Vue.component('Home',Home)
Vue.component('Sort',Sort)
Vue.component('Cart',Cart)
Vue.component('Profile',Profile)
Vue.component('Login',Login)

new Vue({
  render: h => h(App),
  router, //注册路由
  // store
}).$mount('#app')
