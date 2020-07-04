import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
} from 'react-native'

import PostCard from '@comp/PostCard'
import CommentItem from '@comp/CommentItem'
import CoverLayer from '@comp/CoverLayer'

import ShareIcon from '@/assets/icon/icon_share.svg'
import CommentIcon from '@/assets/icon/icon_comment.svg'
import HeartIcon from '@/assets/icon/icon_heart.svg'

import { postDetail, commentList } from '@/mock-data'

function PostDetailFooter() {
  const [showTextInput, setShowTextInput] = useState(false)

  return (
    <View
      style={{
        // position: 'absolute',
        // left: 0,
        // bottom: 0,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      {!showTextInput && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {[
            {
              Icon: ShareIcon,
              label: '转发',
              clickFunc: () => setShowTextInput(true),
            },
            {
              Icon: CommentIcon,
              label: '评论',
              clickFunc: () => setShowTextInput(true),
            },
            {
              Icon: HeartIcon,
              label: '点赞',
              clickFunc: () => setShowTextInput(true),
            },
          ].map(({ Icon, label, clickFunc }) => (
            <TouchableNativeFeedback onPress={() => clickFunc()}>
              <View
                style={{
                  flex: 1,
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon width={20} height={20} />
                <Text style={{ marginLeft: 5, color: '#7c7c7c', fontSize: 13 }}>
                  {label}
                </Text>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
      )}

      {showTextInput && (
        <CoverLayer
          visible={showTextInput}
          closeModal={() => setShowTextInput(false)}>
          <KeyboardAvoidingView
            style={{ flex: 1, justifyContent: 'flex-end' }}
            behavior="padding">
            <View style={{ backgroundColor: 'white' }}>
              <TextInput placeholder="发条友善的评论" autoFocus={true} />
            </View>
          </KeyboardAvoidingView>
        </CoverLayer>
      )}
    </View>
  )
}

export default () => {
  const [postData, setPostData] = useState(null)
  useEffect(() => {
    setPostData(postDetail)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={commentList}
        ListHeaderComponent={
          <View key="bilibili">
            {postData && (
              <PostCard
                style={{
                  marginBottom: 15,
                  padding: 15,
                  backgroundColor: 'white',
                }}
                renderFooter={<></>}
                post={postData}
              />
            )}
            <View style={{ height: 10, backgroundColor: '#f4f4f4' }} />
            <View style={{ padding: 10, backgroundColor: 'white' }}>
              <Text>热门评论</Text>
            </View>
          </View>
        }
        // ListFooterComponent={{}}
        renderItem={({ item }, i) => <CommentItem key={item.id} data={item} />}
      />
      <PostDetailFooter />
    </SafeAreaView>
  )
}
