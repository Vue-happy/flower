const Home = () => import('../pages/Home.vue')
const Sort = () => import('../pages/Sort.vue')
const Cart = () => import('../pages/Cart')
const Profile = () => import('../pages/Profile')
const Login = () => import('../pages/Login')

import Detail from '../pages/Detail.vue'
import Goods from '../pages/Goods.vue'
import Order from '../pages/Order.vue'


export default [
  {
    path:'/home',
    component: Home
  },
  {
    path:'/sort',
    component: Sort,
    // children: [
    //   {
    //     path: '/sort/goods',
    //     component: Goods
    //   }
    // ]
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path:'/detail',
    component: Detail
  },
  {
    path:'/cart',
    component: Cart
  },  
  {
    path:'/Profile',
    component: Profile
  },
  {
    path:'/login',
    component: Login
  },

  {
    path: '/',
    redirect: '/sort'
  }
]