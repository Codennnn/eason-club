import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { secondary } from '@/config/style.config'

import BackIcon from '@icon/icon_back.svg'
import LoginPlate from '@img/login_plate.svg'
import Wechat from '@img/wechat.svg'
import Weibo from '@img/weibo.svg'
import QQ from '@img/qq.svg'

export default () => {
  const nav = useNavigation()

  const css = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: 'white',
    },
    bar: {
      paddingVertical: 15,
      paddingHorizontal: 10,
    },
    plate: { marginTop: 100, marginBottom: 40, alignItems: 'center' },
    footer: {
      position: 'absolute',
      bottom: 100,
      width: '100%',
    },
    way: {
      paddingHorizontal: 40,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  })

  return (
    <SafeAreaView style={css.page}>
      <View style={css.bar}>
        <TouchableWithoutFeedback onPress={() => nav.goBack()}>
          <BackIcon width={28} height={28} />
        </TouchableWithoutFeedback>
      </View>
      <View>
        <View style={css.plate}>
          <LoginPlate width="60%" height={120} />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ marginBottom: 5, fontSize: 20 }}>
            登录后开启专属个人主页
          </Text>
          <Text style={{ fontSize: 13, color: secondary }}>
            需同意
            <Text style={{ color: '#000' }}>意想社团用户协议</Text>
            才可使用
          </Text>
        </View>
      </View>

      <View style={css.footer}>
        <View style={css.way}>
          {[
            { Icon: Wechat, label: '微信' },
            { Icon: Weibo, label: '微博' },
            { Icon: QQ, label: 'QQ' },
          ].map(({ Icon, label }) => (
            <TouchableWithoutFeedback
              key={label}
              onPress={() => nav.navigate('Login')}>
              <View style={{ alignItems: 'center' }}>
                <Icon />
                <Text style={{ marginTop: 6 }}>{label}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
        <View style={{ paddingVertical: 20, alignItems: 'center' }}>
          <TouchableWithoutFeedback onPress={() => nav.navigate('Login')}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                color: secondary,
              }}>
              或选择账号登录
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  )
}
