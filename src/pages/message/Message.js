import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import MessageItem from '@comp/MessageItem'

import { messageList } from '@/mock-data'

export default () => {
  return (
    <SafeAreaView>
      <FlatList
        data={messageList}
        renderItem={({ item }, i) => <MessageItem />}
      />
    </SafeAreaView>
  )
}
