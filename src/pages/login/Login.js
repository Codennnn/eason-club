import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  TextInput,
} from 'react-native'

import UserIcon from '@icon/icon_person.svg'
import LockIcon from '@icon/icon_lock.svg'

const css = StyleSheet.create({
  login: {
    height: '100%',
  },
  form: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form_item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default () => {
  return (
    <View style={css.login}>
      <StatusBar animated={true} hidden={true} />
      <View style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <ImageBackground
          source={require('@img/login_bg.png')}
          style={{
            with: '100%',
            height: 350,
          }}
        />
      </View>

      <View style={css.form}>
        <View style={css.form_item}>
          <UserIcon width={20} height={20} />
          <TextInput placeholder="请输入登录账号" />
        </View>
        <View style={css.form_item}>
          <LockIcon width={20} height={20} />
          <TextInput placeholder="请输入登录密码" />
        </View>
        <Text>登录前请先阅读《隐私协议》</Text>
      </View>

      <View
        style={{ position: 'absolute', right: 0, bottom: 0, width: '100%' }}>
        <ImageBackground
          source={require('@img/login_bg2.png')}
          style={{ with: '100%', height: 160 }}
        />
      </View>
    </View>
  )
}
