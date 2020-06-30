import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Avatar from '@comp/Avatar'

const css = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: 'white',
  },
})

export default () => {
  return (
    <View style={css.header}>
      <Avatar size={75} />
    </View>
  )
}
