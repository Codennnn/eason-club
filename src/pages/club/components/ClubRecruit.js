import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { secondary } from '@/config/style.config'

import Avatar from '@comp/Avatar'

import { members } from '@/mock-data'

export default ({ style }) => {
  const nav = useNavigation()

  return (
    <ScrollView style={[{ padding: 15 }, style]}>
      <View style={{}}>
        <TouchableWithoutFeedback onPress={() => nav.navigate('ClubRecruit')}>
          <View style={{ alignItems: 'center' }}>
            <Avatar clickFunc={() => nav.navigate('RecruitForm')} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  )
}
