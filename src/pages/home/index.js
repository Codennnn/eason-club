import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'
import Swiper from 'react-native-swiper'

import Avatar from '@comp/avatar/Avatar'
import SearchInput from './components/SearchInput'
import CubeIcon from '@/assets/icon/icon_cube.svg'
import MailIcon from '@/assets/icon/icon_mail.svg'

export default ({ navigation }) => {
  const routeTo = routeName => {
    navigation.navigate(routeName)
  }
  const plates = [
    {
      label: '社团招新',
      icon: require('@img/home_new.png'),
      routeName: 'Activity',
    },
    {
      label: '社团活动',
      icon: require('@img/home_activity.png'),
      routeName: 'Activity',
    },
    {
      label: '社团推荐',
      icon: require('@img/home_like.png'),
      routeName: 'Activity',
    },
    {
      label: '寻找社团',
      icon: require('@img/home_search.png'),
      routeName: 'Activity',
    },
  ]

  return (
    <View
      style={{
        width: '100%',
      }}>
      <View style={{ backgroundColor: 'white' }}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Avatar src="https://portrait.gitee.com/uploads/avatars/user/1608/4826670_chinesee_1578975163.png!avatar200" />
          <SearchInput style={{ flex: 1, marginHorizontal: 20 }} />
          <CubeIcon style={{ marginRight: 10 }} width={25} height={25} />
          <MailIcon width={25} height={25} />
        </View>

        <View
          style={{
            width: '100%',
            height: 200,
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Swiper showsPagination={false}>
            <View style={{ width: '100%', height: '100%' }}>
              <Image
                source={require('../../assets/image/home_new.png')}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <View style={{ width: '100%', height: '100%' }}>
              <Image
                source={require('../../assets/image/home_search.png')}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          </Swiper>
        </View>

        <View
          style={{
            height: 50,
            marginBottom: 10,
            paddingTop: 45,
            paddingBottom: 25,
          }}>
          <View
            style={{
              width: '100%',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            {plates.map(({ icon, label, routeName }) => (
              <TouchableWithoutFeedback
                key={label}
                onPress={() => routeTo(routeName)}>
                <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={icon} style={{ width: 40, height: 40 }} />
                  <Text style={{ fontSize: 12 }}>{label}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="to" onPress={() => console.warn(1)} />
      </View>
    </View>
  )
}
