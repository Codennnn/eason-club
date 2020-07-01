import React from 'react'
import { SafeAreaView, ScrollView, Image, View, Text } from 'react-native'

import ArrowIcon from '@icon/icon_chevron.svg'

export default () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ArrowIcon width={20} height={20} style={{ marginLeft: 'auto' }} />
      </ScrollView>
    </SafeAreaView>
  )
}
