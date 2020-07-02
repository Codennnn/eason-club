import React from 'react'
import { SafeAreaView } from 'react-native'

import ClubHeader from './components/ClubHeader'
import ClubView from './components/ClubView'

const info = {
  owner: {
    avatar_url: 'https://gitee.com/chinesee/images/raw/master/club/008.jpg',
  },
  introduction: '理性观世界，自信看中国',
}

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ClubHeader
        avatar_url={info.owner.avatar_url}
        name={info.owner.name}
        introduction={info.introduction}
      />
      <ClubView />
    </SafeAreaView>
  )
}
