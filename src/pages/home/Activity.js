import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import ActivityCard from '@comp/ActivityCard'

import { activityList } from '@/mock-data'

export default function({ navigation }) {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
      }}>
      <FlatList
        data={activityList}
        renderItem={({ item }, i) => (
          <ActivityCard
            key={item.id}
            style={{
              marginBottom: 10,
              // padding: 15,
              backgroundColor: 'white',
            }}
            {...item}
          />
        )}
      />
    </SafeAreaView>
  )
}
