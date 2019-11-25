import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './router'

// 使用路由
Vue.use(VueRouter)

// 创建路由器
const router = new VueRouter({
  routes
})

export default router