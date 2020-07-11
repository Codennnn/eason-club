import React from 'react'
import { StyleSheet, View } from 'react-native'

import ClubCard from '@comp/ClubCard'

import { clubCardList } from '@/mock-data'

const css = StyleSheet.create({
  club_card: {},
})

export default ({ style }) => {
  return (
    <View style={[css.club_card, style]}>
      {clubCardList.map((item, i) => (
        <ClubCard
          key={i}
          style={{
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#efefef',
          }}
          {...item}
        />
      ))}
    </View>
  )
}
