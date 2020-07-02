import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import Avatar from './Avatar'
import { useNavigation } from '@react-navigation/native'
import { primary, secondary } from '@/config/style.config'

import VIcon from '@icon/icon_v.svg'

const css = StyleSheet.create({
  club_card: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  follow_btn: {
    marginLeft: 'auto',
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
})

export default ({
  style,
  avatar_url,
  name,
  own,
  fans_num,
  post_num,
  introduction,
  is_followed,
}) => {
  const nav = useNavigation()
  const onClickAvatar = () => {
    nav.navigate('Club')
  }

  return (
    <View style={[css.club_card, style]}>
      <View>
        <Avatar src={avatar_url} clickFunc={onClickAvatar} size={80} />
        <VIcon
          style={{ position: 'absolute', right: 0, bottom: 0 }}
          width={25}
          height={25}
        />
      </View>

      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 16 }}>{name}</Text>
        <View
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ paddingRight: 15, color: secondary, fontSize: 12 }}>
            粉丝：{fans_num}
          </Text>
          <Text style={{ color: secondary, fontSize: 12 }}>
            动态：{post_num}
          </Text>
        </View>
        <Text style={{ color: secondary, fontSize: 12 }}>{own}</Text>
      </View>

      <TouchableWithoutFeedback>
        <View
          style={[
            css.follow_btn,
            { backgroundColor: is_followed ? '#dedede' : primary },
          ]}>
          <Text style={{ color: is_followed ? '#999' : null }}>
            {is_followed ? '已关注' : '+ 关注'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}
