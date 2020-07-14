import React, { useState } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import HomeBar from './components/HomeBar'
import HomeHeader from './components/HomeHeader'
import PostCard from '@comp/PostCard'
import CoverLayer from '@comp/CoverLayer'
import ShareActionSheet from '@comp/ShareActionSheet'

import { posts } from '@/mock-data'

export default () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <SafeAreaView>
      <HomeBar />

      <FlatList
        data={posts}
        ListHeaderComponent={HomeHeader}
        renderItem={({ item }) => (
          <PostCard
            key={item.id}
            post={item}
            openActionSheet={() => {
              setShowModal(true)
            }}
            style={{
              padding: 12,
              paddingBottom: 0,
              marginBottom: 10,
              backgroundColor: 'white',
            }}
          />
        )}
      />

      <CoverLayer visible={showModal} closeModal={() => setShowModal(false)}>
        <ShareActionSheet
          visible={showModal}
          onCancel={() => setShowModal(false)}
        />
      </CoverLayer>
    </SafeAreaView>
  )
}
