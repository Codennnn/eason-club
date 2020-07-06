import React from 'react'
import { FlatList, View } from 'react-native'
import { lightGray } from '@/config/style.config'

import SearchInput from '@comp/SearchInput'
import PostCard from '@comp/PostCard'

import { posts } from '@/mock-data'

export default ({ style }) => {
  return (
    <View style={[style]}>
      <FlatList
        contentContainerStyle={{ padding: 15 }}
        data={posts}
        ListHeaderComponent={
          <View>
            <SearchInput
              placeholder="查找精彩动态内容"
              placeholderTextColor={lightGray}
            />
          </View>
        }
        renderItem={({ item }, i) => (
          <PostCard
            key={item.id}
            post={item}
            style={{
              paddingVertical: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#eee',
            }}
          />
        )}
      />
    </View>
  )
}
