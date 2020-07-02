import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ClubCard from '@comp/ClubCard'

const css = StyleSheet.create({
  club_card: {},
})

export default ({ style, avatar_url, name, own, introduction }) => {
  const nav = useNavigation()

  return (
    <View style={[css.club_card, style]}>
      <ClubCard />
    </View>
  )
}
