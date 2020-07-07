import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import { secondary } from '@/config/style.config'

import Avatar from '@comp/Avatar'

import { members } from '@/mock-data'

export default ({ style }) => {
  const css = StyleSheet.create({
    section: {
      marginBottom: 20,
    },
    section_title: {
      marginBottom: 5,
      fontSize: 16,
      fontWeight: 'bold',
      color: secondary,
    },
  })

  return (
    <ScrollView style={[{ padding: 15 }, style]}>
      <View style={{ flexDirection: 'row' }}>
        {members.map(({ avatar_url, name }, i) => (
          <TouchableWithoutFeedback>
            <View key={i} style={{ alignItems: 'center' }}>
              <Avatar src={avatar_url} />
              <Text>{name}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  )
}
