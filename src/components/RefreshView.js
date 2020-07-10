import React from 'react'
import { RefreshControl } from 'react-native'

import { primary } from '@/config/style.config'

export default ({ children, onLoadData, ...props }) => {
  return (
    <RefreshControl
      {...props}
      colors={[primary]}
      tintColor={primary}
      onRefresh={() => onLoadData?.()}>
      {children}
    </RefreshControl>
  )
}
