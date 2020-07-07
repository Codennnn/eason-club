import React from 'react'
import { ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native'
import { secondary } from '@/config/style.config'

import Avatar from '@comp/Avatar'

import { members } from '@/mock-data'

export default ({ style }) => {
  return (
    <ScrollView style={[{ padding: 15 }, style]}>
      <View style={{ flexDirection: 'row' }}>
        {members.map(({ avatar_url, name }, i) => (
          <TouchableWithoutFeedback>
            <View key={i} style={{ alignItems: 'center' }}>
              <Avatar src={avatar_url} />
              <Text style={{ color: secondary }}>{name}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  )
}
