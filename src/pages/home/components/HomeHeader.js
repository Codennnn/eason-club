import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-swiper'

import SearchInput from '@comp/SearchInput'
import Avatar from '@comp/Avatar'

import CubeIcon from '@/assets/icon/icon_cube.svg'
import MailIcon from '@/assets/icon/icon_mail.svg'

export default ({ navigation }) => {
  const nav = useNavigation()
  const routeTo = routeName => {
    nav.navigate(routeName)
  }

  const plates = [
    {
      label: '社团招新',
      icon: require('@img/home_new.png'),
      routeName: 'Recruit',
    },
    {
      label: '活动中心',
      icon: require('@img/home_activity.png'),
      routeName: 'Activity',
    },
    {
      label: '社团推荐',
      icon: require('@img/home_like.png'),
      routeName: 'LoginWay',
    },
    {
      label: '寻找伙伴',
      icon: require('@img/home_search.png'),
      routeName: 'Search',
    },
  ]

  return (
    <>
      <View style={{ backgroundColor: 'white' }}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Avatar src="https://portrait.gitee.com/uploads/avatars/user/1608/4826670_chinesee_1578975163.png!avatar200" />
          <SearchInput
            style={{ flex: 1, marginHorizontal: 20 }}
            editable={false}
            clickFunc={() => nav.navigate('Search')}
          />
          <CubeIcon style={{ marginRight: 10 }} width={25} height={25} />
          <MailIcon width={25} height={25} />
        </View>
      </View>

      <View style={{ marginBottom: 15, backgroundColor: 'white' }}>
        <View
          style={{
            height: 200,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Swiper showsPagination={false}>
            {[
              'https://gitee.com/chinesee/images/raw/master/img/img_039.png',
              'https://gitee.com/chinesee/images/raw/master/img/img_040.png',
              'https://gitee.com/chinesee/images/raw/master/img/img_041.png',
            ].map(uri => (
              <View
                key={uri}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                  padding: 20,
                }}>
                <Image
                  source={{ uri }}
                  style={{ width: '100%', height: '100%', borderRadius: 10 }}
                />
              </View>
            ))}
          </Swiper>
        </View>

        <View
          style={{
            width: '100%',
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          {plates.map(({ icon, label, routeName }) => (
            <TouchableOpacity
              key={label}
              activeOpacity={0.6}
              onPress={() => routeTo(routeName)}>
              <View
                style={{
                  paddingTop: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={icon} style={{ width: 40, height: 40 }} />
                <Text style={{ fontSize: 12 }}>{label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  )
}
