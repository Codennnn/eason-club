import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { primary, secondary, lightGray } from '@/config/style.config'

import Avatar from '@comp/Avatar'

const css = StyleSheet.create({
  profile_header: {
    padding: 20,
    backgroundColor: 'white',
  },
  profile_info: {
    position: 'relative',
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile_statistics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profile_btn: {
    position: 'absolute',
    bottom: 0,
    right: -50,
    width: 125,
    height: 38,
    borderWidth: 2,
    borderRadius: 38 / 2,
    overflow: 'hidden',
  },
  profile_btn_inner: {
    position: 'relative',
    top: 1,
    left: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    borderRadius: 34 / 2,
    justifyContent: 'center',
    backgroundColor: primary,
  },
})

export default ({ style }) => {
  const nav = useNavigation()

  return (
    <View style={[style, css.profile_header]}>
      <View style={css.profile_info}>
        <Avatar size={75} />
        <View style={{ marginLeft: 16 }}>
          <Text style={{ fontSize: 20 }}>123</Text>
          <Text style={{ color: secondary }}>123</Text>
        </View>
        <View style={css.profile_btn}>
          <TouchableWithoutFeedback>
            <View style={css.profile_btn_inner}>
              <Text>个人空间</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={css.profile_statistics}>
        {[
          { label: '我的社团', num: 3 },
          { label: '我的关注', num: 3, route: 'Follow' },
          { label: '我的活动', num: 3 },
        ].map(({ label, num, route }) => (
          <TouchableWithoutFeedback
            key={label}
            onPress={() => nav.navigate(route)}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ marginBottom: 5, fontSize: 19 }}>{num}</Text>
              <Text style={{ color: lightGray }}>{label}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  )
}
