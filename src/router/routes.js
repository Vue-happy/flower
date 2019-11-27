const Home = () => import('../pages/Home.vue')
const Sort = () => import('../pages/Sort')
const Cart = () => import('../pages/Cart')
const Profile = () => import('../pages/Profile')
const Login = () => import('../pages/Login')
const Test = () => import('../pages/test')




export default [
  {
    path:'/home',
    component: Home
  },   
  {
    path:'/test',
    component: Test
  }, 
  {
    path:'/sort',
    component: Sort
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
    redirect: '/home'
  }
]