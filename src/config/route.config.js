import LoginWay from '@/pages/login/LoginWay'
import Login from '@/pages/login/Login'

import Search from '@/pages/home/Search'
import Activity from '@/pages/home/Activity'
import Recruit from '@/pages/home/Recruit'

import Club from '@/pages/club'
import ClubClass from '@/pages/explore/ClubClass'

import Setting from '@/pages/profile/Setting'

export default [
  { name: 'LoginWay', component: LoginWay },
  { name: 'Login', component: Login },
  { name: 'Search', component: Search },
  { name: 'Club', component: Club },
  { name: 'ClubClass', component: ClubClass, title: '分类', headerShown: true },
  { name: 'Setting', component: Setting, title: '应用设置', headerShown: true },
  { name: 'Recruit', component: Recruit, title: '社团招新', headerShown: true },
  {
    name: 'Activity',
    component: Activity,
    title: '社团活动',
    headerShown: true,
  },
]
