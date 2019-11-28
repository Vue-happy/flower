import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import loading from './assets/loading.gif



import  'lib-flexible/flexible'
Vue.config.productionTip = false

import Comment from './components/Comment/Comment'
import Chat from './pages/Chat/Chat'

import Home from '../src/pages/Home'
import Sort from '../src/pages/Sort'
import Cart from '../src/pages/Cart'
import Profile from '../src/pages/Profile'
import Login from '../src/pages/Login'
import Footer from '../src/components/Footer/Footer'
import Detail from '../src/components/Detail/Detail'

// 注册vant全局组件
import { Field,Icon  } from 'vant';
import { Tabbar, TabbarItem } from "vant"
import { NavBar } from 'vant';
import { Button } from 'vant';
import { Toast } from 'vant';
import { Grid, GridItem } from 'vant';
import { Divider } from 'vant';
import { Overlay } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Row, Col } from 'vant';
import {Overlay} from 'vant'


Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Grid).use(GridItem);
Vue.use(Overlay);
Vue.use(Divider);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Row).use(Col);
Vue.use(Overlay)
Vue.use(VueLazyLoad,{
  loading
})

//Vue全局注册组件的语法:Vue
Vue.component('Comment',Comment)
Vue.component('Chat',Chat)
Vue.component('Home',Home)
Vue.component('Sort',Sort)
Vue.component('Cart',Cart)
Vue.component('Profile',Profile)
Vue.component('Login',Login)
Vue.component('Footer',Footer)
Vue.component('Detail',Detail)

new Vue({
  render: h => h(App),
  router, //注册路由
  store
}).$mount('#app')
