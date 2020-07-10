import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, Text, View, Image, StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder'
import { lightGray } from '@/config/style.config'

import Avatar from '@comp/Avatar'

import { activityDetail } from '@/mock-data'

function PlaceHolder() {
  return (
    <View>
      <Placeholder
        Animation={props => (
          <Fade
            {...props}
            style={{ backgroundColor: '#f0f4f7' }}
            duration={300}
          />
        )}>
        <PlaceholderLine
          style={{ height: 200, marginBottom: 30, borderRadius: 0 }}
        />

        <View style={{ paddingHorizontal: 15 }}>
          <PlaceholderLine style={{ height: 30 }} />
          <PlaceholderLine width={80} style={{ height: 30 }} />
          <PlaceholderLine width={30} />

          <View
            style={{
              marginVertical: 40,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <PlaceholderMedia isRound={true} style={{ marginRight: 15 }} />
            <View style={{ width: 120 }}>
              <PlaceholderLine style={{ height: 20, marginBottom: 5 }} />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <PlaceholderLine
                  width={35}
                  style={{ height: 8, marginRight: 10, marginBottom: 0 }}
                />
                <PlaceholderLine
                  width={35}
                  style={{ height: 8, marginBottom: 0 }}
                />
              </View>
            </View>
            <PlaceholderLine
              width={15}
              style={{ height: 30, marginLeft: 'auto' }}
            />
          </View>

          <PlaceholderLine style={{ height: 22 }} />
          <PlaceholderLine style={{ height: 22 }} />
          <PlaceholderLine style={{ height: 22 }} />
          <PlaceholderLine style={{ height: 22 }} width={80} />
        </View>
      </Placeholder>
    </View>
  )
}

function Article() {
  return (
    <WebView
      originWhitelist={['*']}
      source={{
        uri:
          'https://mp.weixin.qq.com/s?__biz=MzA5NTQ0MTEyNw==&amp;mid=2652174465&amp;idx=5&amp;sn=188d16cd58c7a6e1cd2fa8fb4d25f66d&amp;chksm=8b5f0109bc28881fb6110c433f7de81ecbb20eb0c7f2d1d76749c22eebd5f1a496e58ee997ff&scene=21&ascene=0&devicetype=android-29&version=27001039&nettype=WIFI&abtest_cookie=AAACAA%3D%3D&lang=zh_CN',
      }}
    />
  )
}

export default () => {
  const [article, setArticle] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      setArticle(activityDetail)
    }, 1500)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar hidden={true} />
      {article ? <Article /> : <PlaceHolder />}
    </SafeAreaView>
  )
}
