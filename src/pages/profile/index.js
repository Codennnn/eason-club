import React from 'react'
import { SafeAreaView, ScrollView, Image, View, Text } from 'react-native'

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

        <View
          style={{
            paddingVertical: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('@img/text_bg.png')}
            style={{ width: 100, height: 30, opacity: 0.8 }}
          />
          <Text style={{ color: '#d9d9d9' }}>给你意想不到的精彩</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
