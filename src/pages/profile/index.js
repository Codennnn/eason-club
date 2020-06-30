import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import ProfileHeader from './components/ProfileHeader'
import ProfileItem from './components/ProfileItem'
import ProfileMenu from './components/ProfileMenu'

export default () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileHeader style={{ marginBottom: 15 }} />
        <ProfileItem style={{ marginBottom: 15 }} />
        <ProfileMenu />
      </ScrollView>
    </SafeAreaView>
  )
}
