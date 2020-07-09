import React from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { lightGray } from '@/config/style.config'

import Avatar from '@comp/Avatar'

const css = StyleSheet.create({
  item: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
})

export default ({ style, user, avatar, content, last_time }) => {
  const nav = useNavigation()

  return (
    <TouchableNativeFeedback onPress={() => nav.navigate('MessageDetail')}>
      <View style={[css.item, style]}>
        <Avatar size={55} src={user.avatar} />
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text style={{ marginBottom: 5, fontSize: 15 }}>{user.name}</Text>
          <Text style={{ color: lightGray }} numberOfLines={1}>
            {content}
          </Text>
        </View>
        <Text
          style={{
            marginTop: 5,
            alignSelf: 'flex-start',
            fontSize: 12,
            color: lightGray,
          }}>
          {last_time}
        </Text>
      </View>
    </TouchableNativeFeedback>
  )
}
