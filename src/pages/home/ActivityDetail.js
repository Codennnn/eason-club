import React from 'react'
import { SafeAreaView, Text, View, Image, StatusBar } from 'react-native'

import Avatar from '@comp/Avatar'

export default () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar hidden={true} />
      <View>
        <Image
          style={{ width: '100%', height: 220, resizeMode: 'cover' }}
          source={{
            uri: 'https://gitee.com/chinesee/images/raw/master/club/001.png',
          }}
        />
      </View>

      <View>
        <Text>123</Text>
      </View>
    </SafeAreaView>
  )
}
