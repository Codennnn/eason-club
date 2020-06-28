import React from 'react'
import { View, Text, Button } from 'react-native'

export default function({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="to" onPress={() => navigation.navigate('Activity')} />
    </View>
  )
}
