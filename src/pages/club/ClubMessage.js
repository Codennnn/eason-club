import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { lightGray } from '@/config/style.config'

import RefreshView from '@comp/RefreshView'
import Empty from '@img/empty.svg'

export default () => {
  const [refreshing, setRefreshing] = useState(false)

  const onLoadData = async () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 1500)
  }
  useEffect(() => {
    onLoadData()
  }, [])

  return (
    <SafeAreaView>
      <RefreshView refreshing={refreshing} onLoadData={onLoadData}>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Empty style={{ marginBottom: 40 }} width={200} height={150} />
          <Text style={{ color: lightGray }}>暂无数据</Text>
        </View>
      </RefreshView>
    </SafeAreaView>
  )
}
