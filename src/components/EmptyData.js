import React from 'react'
import { Text, View } from 'react-native'
import { lightGray } from '@/config/style.config'

import Empty from '@img/empty.svg'

export default ({ text = '暂无数据' }) => {
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Empty style={{ marginBottom: 40 }} width={200} height={150} />
      <Text style={{ color: lightGray }}>{text}</Text>
    </View>
  )
}
