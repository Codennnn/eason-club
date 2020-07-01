import Login from '@/pages/login/Login'
import Search from '@/pages/home/search/Search'
import Club from '@/pages/club'

export const HomeRoutes = {
  Home: 'Home',
}

export const ExploreRoutes = {
  Explore: 'Explore',
}

export const MessageRoutes = {
  Message: 'Message',
}

export const ProfileRoutes = {
  Profile: 'Profile',
}

export default [
  { name: 'Login', component: Login },
  { name: 'Search', component: Search },
  { name: 'Club', component: Club },
]
