import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const css = StyleSheet.create({
  profile_item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: 'white',
  },
})

export default ({ style }) => {
  const nav = useNavigation()
  const blocks = [
    {
      label: '社团管理',
      icon: require('@img/profile_light.png'),
      route: 'ClubManagement',
    },
    {
      label: '我的任务',
      icon: require('@img/profile_tab.png'),
      route: 'ClubTask',
    },
    {
      label: '社团消息',
      icon: require('@img/profile_msg.png'),
      iconWidth: 38,
      route: 'ClubMessage',
    },
    {
      label: '发送动态',
      icon: require('@img/profile_show.png'),
      route: 'Post',
    },
  ]

  return (
    <View style={[css.profile_item, style]}>
      {blocks.map(({ label, icon, route, iconWidth = 32 }) => (
        <TouchableOpacity
          key={label}
          activeOpacity={0.5}
          onPress={() => nav.navigate(route)}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={icon} style={{ width: iconWidth, height: 32 }} />
            <Text style={{ marginTop: 8, fontSize: 11 }}>{label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}
