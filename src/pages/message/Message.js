import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

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
      <Text tabLabel="消息">My</Text>
    </ScrollableTabView>
  )
}
