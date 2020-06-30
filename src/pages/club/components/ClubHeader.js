import React from 'react'
import { View, Text } from 'react-native'

import Avatar from '@comp/Avatar'

export default ({ avatar_url, name = '--' }) => {
  return (
    <View>
      <Avatar src={avatar_url} />
      <Text>{name}</Text>
    </View>
  )
}
