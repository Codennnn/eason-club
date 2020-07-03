import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import Avatar from '@comp/Avatar'

import { posts } from '@/mock-data'

export default () => {
  return (
    <SafeAreaView>
      {/* <FlatList
        data={posts}
        ListHeaderComponent={HomeHeader}
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
      /> */}
    </SafeAreaView>
  )
}
