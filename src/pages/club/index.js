import React from 'react'
import { View } from 'react-native'

import ClubHeader from './components/ClubHeader'

const info = {
  owner: {
    avatar_url: '',
  },
  introduction: '',
}

export default () => {
  return (
    <View>
      <ClubHeader
        avatar_url={info.owner.avatar_url}
        name={info.owner.name}
        introduction={info.introduction}
      />
    </View>
  )
}
