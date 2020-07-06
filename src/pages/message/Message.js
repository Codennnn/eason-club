import React from 'react'
import { View, FlatList } from 'react-native'

import MessageItem from '@comp/MessageItem'

import { contactList } from '@/mock-data'

export default () => {
  return (
    <View>
      <FlatList
        data={contactList}
        renderItem={({ item }, i) => <MessageItem key={item.id} {...item} />}
      />
    </View>
  )
}
