import React from 'react'
import { FlatList } from 'react-native'

import PostCard from '@comp/PostCard'

import { clubDynamic } from '@/mock-data'

export default ({ style }) => {
  return (
    <FlatList
      data={clubDynamic}
      renderItem={({ item }) => (
        <PostCard
          key={item.id}
          post={item}
          style={{
            padding: 12,
            paddingBottom: 0,
            marginBottom: 10,
            backgroundColor: 'white',
          }}
        />
      )}
    />
  )
}
