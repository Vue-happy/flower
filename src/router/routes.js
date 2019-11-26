import FirstPage from '../pages/FirstPage/FirstPage'

export default [
  //首页的路由
  {
    path:'/firstpage',
    component:FirstPage
  },
  //路由重定向
  {
    path:'/',
    redirect:'/firstpage'
  }
]