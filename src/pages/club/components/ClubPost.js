import React from 'react'
import { FlatList } from 'react-native'
import { secondary } from '@/config/style.config'

import PostCard from '@comp/PostCard'

import { posts } from '@/mock-data'

export default ({ style }) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <PostCard
          key={item.id}
          post={item}
          // openActionSheet={() => {
          //   setShowModal(true)
          // }}
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
