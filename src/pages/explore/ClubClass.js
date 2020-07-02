import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ClubCard from '@comp/ClubCard'

const dataList = [
  {
    avatar_url: '',
    name: '意想社团',
    own: '广大华软',
    fans_num: '4.5k',
    post_num: '486',
    is_followed: false,
  },
  {
    avatar_url: '',
    name: '意想社团',
    own: '广大华软',
    fans_num: '4.5k',
    post_num: '486',
    is_followed: true,
  },
]

const css = StyleSheet.create({
  club_card: {},
})

export default ({ style, avatar_url, name, own, introduction }) => {
  const nav = useNavigation()

  return (
    <View style={[css.club_card, style]}>
      {dataList.map((item, i) => (
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
