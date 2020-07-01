import React, { useState, useRef } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  TextInput,
} from 'react-native'
import Ripple from 'react-native-material-ripple'
import Toast from 'react-native-easy-toast'
import { primary, secondary } from '@/config/style.config'

import UserIcon from '@icon/icon_person.svg'
import LockIcon from '@icon/icon_lock.svg'

const css = StyleSheet.create({
  login: {
    height: '100%',
  },
  form: {
    zIndex: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form_content: {
    width: '55%',
  },
  form_item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  submit_btn: {
    width: '100%',
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    borderRadius: 10,
    overflow: 'hidden',
  },
})

export default () => {
  const toast = useRef(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = () => {
    if (username.trim.length <= 0 || password.trim.length <= 0) {
      toast.current.show('请输入账号或密码', 1000)
    }
  }

  return (
    <View style={css.login}>
      <Toast ref={toast} position="top" />
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
        <View style={css.form_content}>
          <View style={css.form_item}>
            <UserIcon width={20} height={20} />
            <TextInput
              style={{ flex: 1, marginLeft: 5 }}
              placeholder="请输入登录账号"
              onChangeText={text => setUsername(text)}
            />
          </View>
          <View style={css.form_item}>
            <LockIcon width={20} height={20} />
            <TextInput
              style={{ flex: 1, marginLeft: 5 }}
              placeholder="请输入登录密码"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <Text style={{ marginTop: 20 }}>
            <Text style={{ color: secondary }}>登录前请先阅读</Text>
            《隐私协议》
          </Text>
          <Ripple style={css.submit_btn} rippleOpacity={0.1} onPress={onLogin}>
            <Text>立即登录</Text>
          </Ripple>
        </View>
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
