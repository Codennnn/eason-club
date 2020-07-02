import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view'
import { primary, secondary } from '@/config/style.config'

const css = StyleSheet.create({
  tabBarText: {
    // color: secondary,
  },
  tabBarUnderline: {
    backgroundColor: primary,
    borderRadius: 5,
  },
})

export default () => {
  return (
    <ScrollableTabView
      style={{ backgroundColor: 'white' }}
      tabBarActiveTextColor={primary}
      tabBarInactiveTextColor={secondary}
      tabBarTextStyle={css.tabBarText}
      tabBarUnderlineStyle={css.tabBarUnderline}
      scrollWithoutAnimation={true}
      renderTabBar={() => <DefaultTabBar />}>
      <Text tabLabel="主页">My</Text>
      <Text tabLabel="动态">favorite</Text>
      <Text tabLabel="成员">project</Text>
      <Text tabLabel="招新">favorite</Text>
    </ScrollableTabView>
  )
}
