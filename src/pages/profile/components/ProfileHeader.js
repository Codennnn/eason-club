import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Avatar from '@comp/Avatar'
import { TouchableHighlight } from 'react-native-gesture-handler'

const css = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: 'white',
  },
})

export default () => {
  return (
    <View style={css.header}>
      <View>
        <Avatar size={75} />
        <Text>123</Text>
        <Text>123</Text>
        <TouchableHighlight>
          <View>
            <Text>个人信息</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View>
        {[
          { label: '我的社团', num: 3 },
          { label: '我的社团', num: 3 },
          { label: '我的社团', num: 3 },
        ].map(({ label, num }) => (
          <TouchableHighlight>
            <View>
              <Text>{num}</Text>
              <Text>{label}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  )
}
