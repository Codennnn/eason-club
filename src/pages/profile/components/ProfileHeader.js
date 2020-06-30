import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
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
    height: 34,
    borderWidth: 2,
    borderRadius: 34 / 2,
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
  return (
    <View style={{ ...style, ...css.profile_header }}>
      <View style={css.profile_info}>
        <Avatar size={75} />
        <View style={{ marginLeft: 16 }}>
          <Text style={{ fontSize: 20 }}>123</Text>
          <Text style={{ color: secondary }}>123</Text>
        </View>
        <View style={css.profile_btn}>
          <TouchableHighlight>
            <View style={css.profile_btn_inner}>
              <Text>个人信息</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

      <View style={css.profile_statistics}>
        {[
          { label: '我的社团', num: 3 },
          { label: '我的关注', num: 3 },
          { label: '我的活动', num: 3 },
        ].map(({ label, num }) => (
          <TouchableHighlight key={label}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ marginBottom: 5, fontSize: 19 }}>{num}</Text>
              <Text style={{ color: lightGray }}>{label}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  )
}
