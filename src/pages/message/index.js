import React from 'react'
import { StyleSheet, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { primary, secondary } from '@/config/style.config'

import CustomTabBar from '@comp/CustomTabBar'
import Message from './Message'

const css = StyleSheet.create({
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
      tabBarUnderlineStyle={css.tabBarUnderline}
      scrollWithoutAnimation={true}
      renderTabBar={() => <CustomTabBar />}>
      <Text tabLabel="动态">favorite</Text>
      <Message tabLabel="消息" />
    </ScrollableTabView>
  )
}
