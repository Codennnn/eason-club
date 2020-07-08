import React from 'react'
import { SafeAreaView } from 'react-native'

import TextArea from '@comp/TextArea'

export default () => {
  return (
    <SafeAreaView>
      <TextArea placeholder="描述一下这个任务" showCount={true} />
    </SafeAreaView>
  )
}
