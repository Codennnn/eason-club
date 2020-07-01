import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view'

import ClubHeader from './components/ClubHeader'

const info = {
  owner: {
    avatar_url: 'https://gitee.com/chinesee/images/raw/master/club/008.jpg',
  },
  introduction: '理性观世界，自信看中国',
}

export default () => {
  return (
    <SafeAreaView>
      <ClubHeader
        avatar_url={info.owner.avatar_url}
        name={info.owner.name}
        introduction={info.introduction}
      />

      <View>
        <ScrollableTabView
          style={{ marginTop: 20 }}
          initialPage={2}
          renderTabBar={() => <ScrollableTabBar />}>
          <Text tabLabel="Tab #1">My</Text>
          <Text tabLabel="Tab #2 word word">favorite</Text>
          <Text tabLabel="Tab #3 word word word">project</Text>
          <Text tabLabel="Tab #4 word word word word">favorite</Text>
          <Text tabLabel="Tab #5">project</Text>
        </ScrollableTabView>
      </View>
    </SafeAreaView>
  )
}
