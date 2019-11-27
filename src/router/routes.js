import FirstPage from '../pages/FirstPage/FirstPage'
import Detail from '../pages/Detail/Detail'
import Chat from '../pages/Chat/Chat'

export default [
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
  //路由重定向
  {
    path:'/',
    redirect:'/firstpage'
  }
]