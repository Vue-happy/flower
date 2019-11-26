const Home = () => import('../pages/Home.vue')
const Sort = () => import('../pages/Sort')
const Cart = () => import('../pages/Cart')
const Profile = () => import('../pages/Profile')
const Login = () => import('../pages/Login')




export default [
  {
    path:'/home',
    component: Home
  },
  {
    path:'/sort',
    component: Sort,
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