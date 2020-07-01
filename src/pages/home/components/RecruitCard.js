import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { primary, secondary } from '@/config/style.config'

import Avatar from '@comp/Avatar'
import VIcon from '@icon/icon_v.svg'

export default ({ style, info }) => {
  const css = StyleSheet.create({
    card: {
      backgroundColor: 'white',
    },
    info: {
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    line: {
      width: 5,
      height: 25,
      marginRight: 10,
      borderRadius: 2.5,
      backgroundColor: primary,
    },
    btn: {
      position: 'absolute',
      top: -20,
      right: -22,
      width: 120,
      height: 60,
      borderWidth: 2,
      borderRadius: 15,
      overflow: 'hidden',
    },
    btn_inner: {
      position: 'relative',
      left: 1.6,
      bottom: 1.6,
      width: '100%',
      height: '100%',
      paddingHorizontal: 15,
      paddingTop: 20,
      justifyContent: 'center',
      backgroundColor: primary,
      borderRadius: 12,
    },
  })

  return (
    <View style={{ ...style, ...css.card }}>
      <View style={css.info}>
        <View>
          <Avatar />
          <VIcon
            style={{ position: 'absolute', right: -5, bottom: -5 }}
            width={20}
          />
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {info.owner.name}
          </Text>
          <Text style={{ marginLeft: 1, color: secondary, fontSize: 12 }}>
            {info.owner.own}
          </Text>
        </View>
      </View>

      <View
        style={{
          marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={css.line} />
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{info.title}</Text>
      </View>

      {info.content?.length > 0 && (
        <Text style={{ fontSize: 16, lineHeight: 28, textAlign: 'justify' }}>
          {info.content}
        </Text>
      )}

      <TouchableWithoutFeedback>
        <View style={css.btn}>
          <View style={css.btn_inner}>
            <Text>进入主页</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}
