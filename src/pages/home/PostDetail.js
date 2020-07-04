import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'

import PostCard from '@comp/PostCard'
import CommentItem from '@comp/CommentItem'

import { commentList } from '@/mock-data'

const post = {
  id: '1',
  owner: {
    avatar_url:
      'https://i2.hdslb.com/bfs/face/9fde235378806dacaa4761bf32a6498a7531b55a.jpg_64x64.jpg',
    name: '意想社团',
    own: '广大华软',
  },
  content: '社团招新',
  imgList: [
    'https://gitee.com/chinesee/images/raw/master/club/001.png',
    'https://gitee.com/chinesee/images/raw/master/club/002.png',
    'https://gitee.com/chinesee/images/raw/master/club/003.png',
  ],
  share_num: 198,
  comment_num: 4014,
  like_num: '4.8w',
  is_like: true,
  created_at: '24分钟前',
}

// function CommentList() {
//   return (

//   )
// }

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={{ padding: 15, backgroundColor: 'white' }}>
        <CommentList />
      </View> */}
      <FlatList
        data={commentList}
        ListHeaderComponent={
          <View>
            <PostCard
              style={{
                marginBottom: 15,
                padding: 15,
                backgroundColor: 'white',
              }}
              renderFooter={<></>}
              post={post}
            />
            <View style={{ padding: 10, backgroundColor: 'white' }}>
              <Text>热门评论</Text>
            </View>
          </View>
        }
        renderItem={({ item }, i) => <CommentItem key={i} data={item} />}
      />
    </SafeAreaView>
  )
}
