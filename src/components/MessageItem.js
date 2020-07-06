import React from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native'

const css = StyleSheet.create({})

export default ({ style, name }) => {
  return (
    <TouchableNativeFeedback>
      <View style={[style]}>
        <Text>{name}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}
