import Vue from 'vue'
 import App from './App.vue'
import router from './router'
import VUX from './vux'


import  'lib-flexible/flexible'
Vue.config.productionTip = false



import Home from '../src/pages/Home'
import Sort from '../src/pages/Sort'
import Cart from '../src/pages/Cart'
import Profile from '../src/pages/Profile'
import Login from '../src/pages/Login'
import Footer from '../src/components/Footer/Footer'

// 注册vant全局组件
import { Field,Icon  } from 'vant';
import { Tabbar, TabbarItem } from "vant"
import { NavBar } from 'vant';
import { Button } from 'vant';
import { Toast } from 'vant';
import { Grid, GridItem } from 'vant';
import { Divider } from 'vant';
import { Overlay } from 'vant';

Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Grid).use(GridItem);
Vue.use(Overlay);

//Vue全局注册组件的语法:Vue
Vue.component('Home',Home)
Vue.component('Sort',Sort)
Vue.component('Cart',Cart)
Vue.component('Profile',Profile)
Vue.component('Login',Login)
Vue.component('Footer',Footer)
Vue.use(Divider);

new Vue({
  render: h => h(App),
  router, //注册路由
  // store
}).$mount('#app')
