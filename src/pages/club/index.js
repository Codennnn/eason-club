import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import ClubHeader from './components/ClubHeader'
import ClubTabView from './components/ClubTabView'

const info = {
  owner: {
    avatar_url: 'https://gitee.com/chinesee/images/raw/master/club/008.jpg',
    name: '新媒体工作部',
  },
  introduction: '理性观世界，自信看中国',
}

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ClubHeader
        avatar_url={info.owner.avatar_url}
        name={info.owner.name}
        introduction={info.introduction}
      />
      <ClubTabView />
    </SafeAreaView>
  )
}
