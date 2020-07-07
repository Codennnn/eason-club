import React from 'react'
import { StyleSheet } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { primary, secondary } from '@/config/style.config'

import CustomTabBar from '@comp/CustomTabBar'
import ClubHome from './ClubHome'
import ClubPost from './ClubPost'
import ClubMember from './ClubMember'
import ClubRecruit from './ClubRecruit'

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
      <ClubHome tabLabel="主页" />
      <ClubPost tabLabel="动态" />
      <ClubMember tabLabel="成员" />
      <ClubRecruit tabLabel="招新" />
    </ScrollableTabView>
  )
}
