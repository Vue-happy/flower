
const Hua = () => import('../pages/Hua')
const Home = () => import('../pages/Home')
const Sort = () => import('../pages/Sort')
const Cart = () => import('../pages/Cart')
const Profile = () => import('../pages/Profile')
const Login = () => import('../pages/Login/Login')
const Detail = () => import('../pages/Detail')
const Goods = () => import('../pages/Goods')
const Order = () => import('../pages/Order')

const FirstPage = () => import('../pages/FirstPage/FirstPage')
const Detail = () => import('../pages/Detail/Detail')
const Chat = () => import('../pages/Detail/Detail')
const Comment = () => import('../components/Comment/Comment')


// import FirstPage from '../pages/FirstPage/FirstPage'
// import Detail from '../pages/Detail/Detail'
// import Chat from '../pages/Chat/Chat'
// import Comment from '../components/Comment/Comment'


export default [
  {
    path:'/home',
    component: Home,
    // children:[
    //   {
    //   path:'/home/goods',
    //   components:'Goods' , 
    //   },
    // ],
    meta: {
      isShowFooterGuide:true
    }
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
  {
    path:'/goods',
    component: Goods,
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
    path:'/Order',
    component: Order,
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
  },
// import FirstPage from '../pages/FirstPage/FirstPage'
// import Detail from '../pages/Detail/Detail'
// import Chat from '../pages/Chat/Chat'
// import Comment from '../components/Comment/Comment'

// export default [
  //首页的路由
  {
    path:'/firstpage',
    component:FirstPage
  },
  //详情页路由
  {
    path:'/detail',
    component:Detail
  },
  //对话页的路由
  {
    path:'/chat',
    component:Chat
  },
  //评价遮罩的路由
  {
    path:'/comment',
    component:Comment
  },
  //路由重定向
  {
    path:'/',
    redirect:'/firstpage'
  }
]