
const Hua = () => import('../pages/Hua')
const Home = () => import('../pages/Home')
const Sort = () => import('../pages/Sort')
const Cart = () => import('../pages/Cart')
const Profile = () => import('../pages/Profile')
const Login = () => import('../pages/Login')
const Detail = () => import('../components/Detail/Detail')



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
    path:'/detail',
    component: Detail,
    meta: {
      isShowFooterGuide: false
    }
  }, 
  {
    path:'/sort',
    component: Sort,
    meta: {
      isShowFooterGuide: true
    }
  },
  // {
  //   path:'/Classify',
  //   component: Classify,
  // },
  {
    path:'/cart',
    component: Cart,
    meta: {
      isShowFooterGuide: true
    }
  },  
  {
    path:'/Profile',
    component: Profile,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path:'/login',
    component: Login,
    meta: {
      isShowFooterGuide: false
    }
  },

  {
    path: '/',
    redirect: '/hua'
  }
]