import Classify from '../pages/Classify/Classify'
import Msite from '../pages/Msite/Msite'
import Shop from '../pages/Shop/Shop'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

export default [
  {
    path:'/msite',
    component:Msite
  },
  {
    path:'/classify',
    component:Classify
  },
  {
    path:'/shop',
    component:Shop
  },
  {
     path: '/profile',
    component: Profile,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    redirect:'msite'
  },
]