import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { lightGray } from '@/config/style.config'

import SearchInput from '@comp/SearchInput'
import PostCard from '@comp/PostCard'

import { dynamic } from '@/mock-data'

export default ({ style }) => {
  return (
    <View style={[style]}>
      <FlatList
        contentContainerStyle={{ padding: 15 }}
        data={dynamic}
        ListHeaderComponent={
          <View>
            <SearchInput
              placeholder="查找精彩动态内容"
              placeholderTextColor={lightGray}
            />
          </View>
        }
        ListFooterComponent={
          <View style={{ paddingVertical: 20 }}>
            <Text
              style={{ fontSize: 12, color: lightGray, textAlign: 'center' }}>
              (≧∇≦)ﾉ 再怎么找也没有啦
            </Text>
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
