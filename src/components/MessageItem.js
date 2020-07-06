import React from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native'

const css = StyleSheet.create({})

export default ({ time }) => {
  return (
    <TouchableNativeFeedback>
      <View>
        <Text>{time}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}
