import Login from '@/pages/login/Login'
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
  { name: 'Club', component: Club },
]
