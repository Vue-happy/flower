const Home = () => import('../pages/Home')
const Sort = () => import('../pages/Sort')
const Cart = () => import('../pages/Cart')
const Profile = () => import('../pages/Profile')
const Login = () => import('../pages/Login')
const Detail = () => import('../components/Detail/Detail')
const test = () => import('../pages/test')
import Chat from '../pages/Chat/Chat'
import Comment from '../components/Comment/Comment'



export default [
  {
    path:'/home',
    component: Home,
    meta: {
      isShowFooterGuide: true
    }
  },     {
    path:'/test',
    component: test,
    meta: {
      isShowFooterGuide: true
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
    path:'/chat',
    component:Chat,
    meta: {
      isShowFooterGuide: false
    }
  },
  //评价遮罩的路由
  {
    path:'/comment',
    component:Comment,
    meta: {
      isShowFooterGuide: false
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
    redirect: '/home'
  }
]