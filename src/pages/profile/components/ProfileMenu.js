import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ripple from 'react-native-material-ripple'

import ArrowIcon from '@icon/icon_chevron.svg'

const css = StyleSheet.create({
  profile_menu_item: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile_menu_item_right: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 1,
    paddingRight: 10,
    borderBottomColor: '#eee',
  },
})

export default ({ style }) => {
  const nav = useNavigation()
  const routeTo = (routeName = 'Home') => {
    nav.navigate(routeName)
  }
  const menus = [
    { label: '我的收藏', route: '', icon: require('@img/cell_star.png') },
    { label: '新建消息', icon: require('@img/cell_add.png') },
    { label: '更多', icon: require('@img/cell_more.png') },
    {
      label: '应用设置',
      route: 'Setting',
      icon: require('@img/cell_login.png'),
    },
  ]

  return (
    <View style={[style, css.profile_menu]}>
      {menus.map(({ label, route, icon, clickFunc = routeTo }, i) => (
        <View
          key={label}
          style={{
            marginBottom: i === menus.length - 2 ? 15 : 0,
          }}>
          <Ripple
            rippleOpacity={0.1}
            onPress={() => clickFunc(route)}
            style={css.profile_menu_item}>
            <View style={{ padding: 15 }}>
              <Image source={icon} style={{ width: 26, height: 26 }} />
            </View>
            <View
              style={[
                css.profile_menu_item_right,
                { borderBottomWidth: i >= menus.length - 2 ? 0 : 1 },
              ]}>
              <Text style={{}}>{label}</Text>
              <ArrowIcon
                width={20}
                height={20}
                style={{ marginLeft: 'auto' }}
              />
            </View>
          </Ripple>
        </View>
      ))}
    </View>
  )
}
