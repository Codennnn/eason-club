import React from 'react'
import { SafeAreaView } from 'react-native'

import ActivityCard from '@comp/ActivityCard'

import { activityList } from '@/mock-data'

export default function({ navigation }) {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        padding: 15,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      {activityList.map(data => (
        <ActivityCard
          key={data.id}
          style={{ padding: 15, borderRadius: 10, backgroundColor: 'white' }}
          {...data}
        />
      ))}
    </SafeAreaView>
  )
}
