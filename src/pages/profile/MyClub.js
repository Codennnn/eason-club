import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import RefreshView from '@comp/RefreshView'
import Empty from '@img/empty.svg'

export default () => {
  return (
    <SafeAreaView>
      <RefreshView>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Empty style={{ marginBottom: 40 }} width={200} height={150} />
          <Text style={{ color: '#aaa' }}>暂无数据</Text>
        </View>
      </RefreshView>
    </SafeAreaView>
  )
}
