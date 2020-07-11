import React, { useEffect, useRef } from 'react'
import { StatusBar, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-community/async-storage'
import { MenuProvider } from 'react-native-popup-menu'
import Toast from 'react-native-easy-toast'
// import SplashScreen from 'react-native-splash-screen'
import routes from '@/config/route.config'

import Home from './pages/home'
import Explore from './pages/explore'
import Message from './pages/message'
import Profile from './pages/profile'

const Tabbar = {
  Home: {
    label: '首页',
    defaultIcon: require('@img/tab_home.png'),
    activeIcon: require('@img/tab_home_active.png'),
    component: Home,
  },
  Explore: {
    label: '探索',
    defaultIcon: require('@img/tab_fun.png'),
    activeIcon: require('@img/tab_fun_active.png'),
    component: Explore,
  },
  Message: {
    label: '消息',
    defaultIcon: require('@img/tab_msg.png'),
    activeIcon: require('@img/tab_msg_active.png'),
    component: Message,
  },
  Profile: {
    label: '我的',
    defaultIcon: require('@img/tab_profile.png'),
    activeIcon: require('@img/tab_profile_active.png'),
    component: Profile,
  },
}

const Tab = createBottomTabNavigator()

const Tabs = ({ navigation }) => {
  const toast = useRef()

  return (
    <>
      <Toast ref={toast} />
      <Tab.Navigator
        backBehavior="initialRoute"
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: '#363636',
          inactiveTintColor: '#7c7c7c',
        }}>
        {['Home', 'Explore', 'Message', 'Profile'].map(name => (
          <Tab.Screen
            key={name}
            name={name}
            options={{
              tabBarLabel: Tabbar[name].label,
              tabBarIcon: ({ focused, size }) => {
                const img = Tabbar[name][focused ? 'activeIcon' : 'defaultIcon']
                return (
                  <Image source={img} style={{ width: size, height: size }} />
                )
              },
            }}
            component={Tabbar[name].component}
          />
        ))}
      </Tab.Navigator>
    </>
  )
}

const Stack = createStackNavigator()

const App = () => {
  const toast = useRef()

  // useEffect(() => {
  //   SplashScreen.hide()
  //   setTimeout(() => {
  //     SplashScreen.show()
  //   }, 500)
  // }, [])

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ; (async () => {
      try {
        const info = JSON.stringify({
          avatar:
            'https://portrait.gitee.com/uploads/avatars/user/1608/4826670_chinesee_1578975163.png!avatar200',
          nickname: '令狐少侠',
          brief: '水能载舟，亦可赛艇',
        })
        await AsyncStorage.setItem('use_info', info)
      } catch {
        toast.current.show('无法访问本地存储')
      }
    })()
  }, [])

  return (
    <MenuProvider>
      <Toast ref={toast} position="top" />
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="white"
          barStyle="dark-content"
        />
        <Stack.Navigator mode="card">
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
