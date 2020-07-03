import React, { useState } from 'react'
import { RefreshControl } from 'react-native'

import { primary } from '@/config/style.config'

export default ({ children }) => {
  const [refreshing, setRefreshing] = useState(false)

  const loadData = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 1500)
  }

  return (
    <RefreshControl
      refreshing={refreshing}
      colors={[primary]}
      tintColor={primary}
      onRefresh={() => loadData()}>
      {children}
    </RefreshControl>
  )
}
