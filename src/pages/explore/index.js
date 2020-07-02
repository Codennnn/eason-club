import React from 'react'
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Image,
  Text,
} from 'react-native'
import Ripple from 'react-native-material-ripple'

import MedalIcon from '@/assets/icon/icon_medal.svg'
import RibbonIcon from '@/assets/icon/icon_ribbon.svg'

const css = StyleSheet.create({
  title: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  item: {
    width: Dimensions.get('window').width / 3,
    paddingHorizontal: 15,
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function() {
  const items = [
    { icon: require('@img/item_wenyi.png'), label: '文艺', iconWith: 42 },
    { icon: require('@img/item_yinyue.png'), label: '音乐' },
    { icon: require('@img/item_yule.png'), label: '娱乐', iconWith: 45.5 },
    { icon: require('@img/item_sheyin.png'), label: '摄影', iconWith: 43.5 },
    { icon: require('@img/item_jishu.png'), label: '技术' },
    { icon: require('@img/item_yundong.png'), label: '运动' },
    { icon: require('@img/item_shijian.png'), label: '实践' },
    { icon: require('@img/item_gongyi.png'), label: '公益' },
    { icon: require('@img/item_qita.png'), label: '其他' },
  ]

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
      }}>
      <Text style={css.title}>社团分类</Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {items.map(({ icon, label, iconWith = 40 }) => (
          <Ripple
            key={label}
            rippleSize={Dimensions.get('window').width / 3.2}
            rippleDuration={300}
            rippleContainerBorderRadius={20}
            style={css.item}>
            <Image source={icon} style={{ width: iconWith, height: 40 }} />
            <Text style={{ marginTop: 8 }}>{label}</Text>
          </Ripple>
        ))}
      </View>

      <Text style={[css.title, { marginBottom: 10 }]}>官方组织</Text>
      <View style={{ flexDirection: 'row', paddingBottom: 15 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Ripple rippleContainerBorderRadius={20} style={{ padding: 20 }}>
            <MedalIcon width={50} height={50} style={{ marginBottom: 5 }} />
            <Text>院组织</Text>
          </Ripple>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Ripple rippleContainerBorderRadius={20} style={{ padding: 20 }}>
            <RibbonIcon width={50} height={50} style={{ marginBottom: 8 }} />
            <Text>系组织</Text>
          </Ripple>
        </View>
      </View>
    </SafeAreaView>
  )
}
