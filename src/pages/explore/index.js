import React from 'react'
import { Dimensions, View, Image, Text } from 'react-native'

export default function() {
  const items = [
    { icon: require('@img/item_wenyi.png'), label: '文艺' },
    { icon: require('@img/item_yinyue.png'), label: '音乐' },
    { icon: require('@img/item_yule.png'), label: '娱乐' },
    { icon: require('@img/item_sheyin.png'), label: '摄影' },
    { icon: require('@img/item_jishu.png'), label: '技术' },
    { icon: require('@img/item_gongyi.png'), label: '公益' },
  ]

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
      }}>
      {items.map(({ icon, label }) => (
        <View
          key={label}
          style={{
            width: Dimensions.get('window').width / 3,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={icon} style={{ width: 40, height: 40 }} />
          <Text>{label}</Text>
        </View>
      ))}
    </View>
  )
}
