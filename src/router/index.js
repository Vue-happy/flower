import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)



// 使用路由

// 创建路由器
const router = new VueRouter({
  routes
})

export default router
