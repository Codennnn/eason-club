import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { primary, secondary } from '@/config/style.config'

import Avatar from '@comp/Avatar'
import VIcon from '@icon/icon_v.svg'

export default ({ style, info }) => {
  const nav = useNavigation()
  const css = StyleSheet.create({
    card: {
      backgroundColor: 'white',
    },
    info: {
      marginBottom: 25,
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
    <View style={[css.card, style]}>
      <View style={css.info}>
        <View>
          <Avatar
            src={info.owner.avatar_url}
            clickFunc={() => nav.navigate('Club')}
          />
          <VIcon
            style={{ position: 'absolute', right: -5, bottom: -5 }}
            width={20}
          />
        </View>
        <TouchableWithoutFeedback onPress={() => nav.navigate('Club')}>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {info.owner.name}
            </Text>
            <Text
              style={{
                marginTop: 2,
                marginLeft: 1,
                color: secondary,
                fontSize: 12,
              }}>
              {info.owner.own}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View
        style={{
          marginBottom: 10,
          paddingRight: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={css.line} />
        <Text style={{ fontSize: 17, fontWeight: 'bold' }} numberOfLines={1}>
          {info.title}
        </Text>
      </View>

      {info.content?.length > 0 && (
        <Text
          style={{ lineHeight: 24, textAlign: 'justify' }}
          numberOfLines={3}>
          {info.content}
        </Text>
      )}

      <TouchableWithoutFeedback onPress={() => nav.navigate('Club')}>
        <View style={css.btn}>
          <View style={css.btn_inner}>
            <Text>进入主页</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}
