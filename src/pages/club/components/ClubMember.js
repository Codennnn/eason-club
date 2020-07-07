import React from 'react'
import {
  Dimensions,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import { secondary } from '@/config/style.config'

import Avatar from '@comp/Avatar'

import { members } from '@/mock-data'

export default ({ style }) => {
  return (
    <ScrollView style={[{ paddingVertical: 10 }, style]}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {members.map(({ avatar_url, name }, i) => (
          <TouchableWithoutFeedback>
            <View
              key={i}
              style={{
                width: Dimensions.get('window').width / 4,
                paddingVertical: 10,
                alignItems: 'center',
              }}>
              <Avatar src={avatar_url} size={50} rounded={false} />
              <Text style={{ marginTop: 5, fontSize: 13, color: secondary }}>
                {name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  )
}
