import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native'

const css = StyleSheet.create({
  profile_item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: 'white',
  },
})

export default ({ style }) => {
  const blocks = [
    { label: '社团管理', icon: require('@img/profile_light.png') },
    { label: '我的任务', icon: require('@img/profile_tab.png') },
    { label: '社团消息', icon: require('@img/profile_msg.png'), iconWidth: 38 },
    { label: '发送动态', icon: require('@img/profile_show.png') },
  ]

  return (
    <View style={{ ...style, ...css.profile_item }}>
      {blocks.map(({ label, icon, iconWidth = 32 }) => (
        <TouchableHighlight key={label}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={icon} style={{ width: iconWidth, height: 32 }} />
            <Text style={{ marginTop: 8, fontSize: 11 }}>{label}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  )
}
