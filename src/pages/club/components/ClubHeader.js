import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { primary } from '@/config/style.config'

import Avatar from '@comp/Avatar'

import AddIcon from '@icon/icon_add.svg'
import VIcon from '@icon/icon_v.svg'

const css = StyleSheet.create({
  club_header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  follow_btn: { flexDirection: 'row', alignItems: 'center' },
})

export default ({ avatar_url, name = '无法显示名称', own = '无' }) => {
  return (
    <View style={css.club_header}>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{name}</Text>
          <VIcon width={24} />
        </View>
        <Text>{own}</Text>

        <TouchableWithoutFeedback>
          <View style={css.follow_btn}>
            <AddIcon width={20} height={20} />
            <Text style={{ color: primary }}>关注</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Avatar src={avatar_url} size={90} style={{ marginLeft: 'auto' }} />
    </View>
  )
}
