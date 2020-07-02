import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Avatar from './Avatar'
import { useNavigation } from '@react-navigation/native'

import VIcon from '@icon/icon_v.svg'

const css = StyleSheet.create({
  club_card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default ({ style, avatar_url, name, own, introduction }) => {
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
      <View>
        <Text>{name}</Text>
        <Text>{own}</Text>
      </View>
    </View>
  )
}
