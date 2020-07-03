import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import RecruitCard from './components/RecruitCard'

import { recruitList } from '@/mock-data'

export default () => {
  return (
    <SafeAreaView>
      <FlatList
        style={{ padding: 15 }}
        data={recruitList}
        renderItem={({ item }) => (
          <RecruitCard
            key={item.id}
            info={item}
            style={{
              padding: 12,
              marginBottom: 10,
              backgroundColor: 'white',
              borderRadius: 10,
              overflow: 'hidden',
            }}
          />
        )}
      />
    </SafeAreaView>
  )
}
