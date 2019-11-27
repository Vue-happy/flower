const Home = () => import('../pages/Home.vue')
const Hua = () => import('../pages/Hua')
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
    path:'/hua',
    component: Hua,
    meta: {
      isShowFooterGuide:false
    }
  }, 
  {
    path:'/test',
    component: Test
  }, 
  {
    path:'/sort',
    component: Sort
  },
  // {
  //   path:'/Classify',
  //   component: Classify,
  // },
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
    redirect: '/hua'
  }
]