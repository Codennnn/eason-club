import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import { WebView } from 'react-native-webview'
import { useNavigation } from '@react-navigation/native'
import { primary } from '@/config/style.config'

export default ({ style }) => {
  const nav = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: primary }}>
        <WebView
          originWhitelist={['*']}
          source={{
            uri:
              'https://mp.weixin.qq.com/s?__biz=MzA5NTQ0MTEyNw==&amp;mid=2652174465&amp;idx=5&amp;sn=188d16cd58c7a6e1cd2fa8fb4d25f66d&amp;chksm=8b5f0109bc28881fb6110c433f7de81ecbb20eb0c7f2d1d76749c22eebd5f1a496e58ee997ff&scene=21&ascene=0&devicetype=android-29&version=27001039&nettype=WIFI&abtest_cookie=AAACAA%3D%3D&lang=zh_CN',
          }}
        />
      </View>
      <View
        style={{
          margin: 20,
          // marginBottom: 20,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <TouchableNativeFeedback onPress={() => nav.navigate('RecruitForm')}>
          <View
            style={{
              paddingVertical: 10,
              alignItems: 'center',
              backgroundColor: primary,
            }}>
            <Text>我想加入</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}
