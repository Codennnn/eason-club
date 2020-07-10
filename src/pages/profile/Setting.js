import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ArrowIcon from '@icon/icon_chevron.svg'

const settingItems = [
  { label: '账号资料', route: 'LoginWay' },
  { label: '安全隐私', route: 'LoginWay', divider: true },
  { label: '清理存储空间' },
  { label: '动态设置', route: 'LoginWay' },
  { label: '用户协议', route: 'LoginWay' },
  { label: '隐私策略', route: 'LoginWay', divider: true },
  { label: '退出登录', route: 'LoginWay' },
]

export default () => {
  const nav = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView style={{ paddingTop: 12 }}>
        {settingItems.map(({ label, divider, route = 'Home' }) => (
          <TouchableNativeFeedback
            key={label}
            onPress={() => nav.navigate(route)}>
            <View
              style={{
                paddingVertical: 12,
                paddingHorizontal: 18,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                marginBottom: divider ? 12 : 0,
              }}>
              <Text>{label}</Text>
              <ArrowIcon
                width={20}
                height={20}
                style={{ marginLeft: 'auto' }}
              />
            </View>
          </TouchableNativeFeedback>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
