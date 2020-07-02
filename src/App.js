import React from 'react'
import { StatusBar, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MenuProvider } from 'react-native-popup-menu'
import routes from '@/config/route.config'

import Home from './pages/home'
import Explore from './pages/explore'
import Message from './pages/message'
import Profile from './pages/profile'

const Tabbar = {
  Home: {
    label: '首页',
    defaultIcon: require('./assets/image/tab_home.png'),
    activeIcon: require('./assets/image/tab_home_active.png'),
    component: Home,
  },
  Explore: {
    label: '探索',
    defaultIcon: require('./assets/image/tab_fun.png'),
    activeIcon: require('./assets/image/tab_fun_active.png'),
    component: Explore,
  },
  Message: {
    label: '消息',
    defaultIcon: require('./assets/image/tab_msg.png'),
    activeIcon: require('./assets/image/tab_msg_active.png'),
    component: Message,
  },
  Profile: {
    label: '我的',
    defaultIcon: require('./assets/image/tab_profile.png'),
    activeIcon: require('./assets/image/tab_profile_active.png'),
    component: Profile,
  },
}

const Stack = createStackNavigator()

const Screen = ({ routeName }) => {
  const component = Tabbar[routeName].component
  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name={routeName}
        component={component}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const getOptions = ({ route }) => {
  return {
    tabBarLabel: Tabbar[route.name].label,
    tabBarIcon: ({ focused, size }) => {
      const img = Tabbar[route.name][focused ? 'activeIcon' : 'defaultIcon']
      return <Image source={img} style={{ width: size, height: size }} />
    },
  }
}

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#363636',
        inactiveTintColor: '#7c7c7c',
      }}>
      {['Home', 'Explore', 'Message', 'Profile'].map(name => (
        <Tab.Screen key={name} name={name} options={data => getOptions(data)}>
          {props => <Screen routeName={name} />}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="white"
          barStyle="dark-content"
        />
        <Stack.Navigator mode="card" initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{ headerShown: false }}
          />
          {routes.map(({ name, component, title, headerShown = false }) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={{ title, headerShown }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  )
}

export default App
