import React, { useState, useEffect, useRef } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
} from 'react-native'
import { primary, lightGray } from '@/config/style.config'

import PostCard from '@comp/PostCard'
import CommentItem from '@comp/CommentItem'
import CoverLayer from '@comp/CoverLayer'

import ShareIcon from '@/assets/icon/icon_share.svg'
import CommentIcon from '@/assets/icon/icon_comment.svg'
import HeartIcon from '@/assets/icon/icon_heart.svg'

import { postDetail, commentList } from '@/mock-data'

function PostDetailFooter() {
  const focusInput = useRef()
  const [showTextInput, setShowTextInput] = useState(false)
  const [inputText, setInputText] = useState('')

  return (
    <View
      style={{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      {!showTextInput && (
        <View
          style={{
            height: '100%',
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
              clickFunc: () => {
                setShowTextInput(true)
                setTimeout(() => {
                  focusInput.current.focus()
                }, 100)
              },
            },
            {
              Icon: HeartIcon,
              label: '点赞',
            },
          ].map(({ Icon, label, clickFunc }) => (
            <TouchableNativeFeedback onPress={() => clickFunc?.()}>
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
            keyboardVerticalOffset={-37}
            behavior="height">
            <View
              style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  flex: 1,
                  marginRight: 10,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  backgroundColor: '#f4f4f4',
                }}>
                <TextInput
                  ref={focusInput}
                  placeholder="发条友善的评论"
                  onChangeText={text => setInputText(text)}
                />
              </View>
              <Text
                style={{ color: inputText.length > 0 ? primary : lightGray }}>
                发布
              </Text>
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
        ListFooterComponent={
          commentList.length > 0 && (
            <View
              style={{
                paddingVertical: 15,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 12, color: lightGray }}>
                (≧∇≦)ﾉ 再怎么找也没有啦
              </Text>
            </View>
          )
        }
        renderItem={({ item }, i) => <CommentItem key={item.id} data={item} />}
      />
      <PostDetailFooter />
    </SafeAreaView>
  )
}
