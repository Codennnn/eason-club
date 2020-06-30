import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { secondary, lightGray } from '@/config/style.config'

import Avatar from './Avatar'
import ImageGrid from './ImageGrid'

import ShareIcon from '@/assets/icon/icon_share.svg'
import CommentIcon from '@/assets/icon/icon_comment.svg'
import LikeIcon from '@/assets/icon/icon_like.svg'

const css = StyleSheet.create({
  post_card: {},
  post_header: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  post_footer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  post_footer_item: {
    flexDirection: 'row',
    alignItems: 'center',
    color: lightGray,
  },
  post_avatar: {
    marginRight: 10,
  },
  post_content: {
    marginBottom: 5,
  },
  post_owner_name: {
    marginBottom: 1,
    fontSize: 15,
    fontWeight: 'bold',
  },
  post_owner_own: {
    color: lightGray,
    fontSize: 11,
  },
})

export default ({ style, post }) => {
  return (
    <View style={{ ...style, ...css.post_card }}>
      <View style={css.post_header}>
        <Avatar style={css.post_avatar} src={post.owner.avatar_url} />
        <View>
          <Text style={css.post_owner_name}>{post.owner.name}</Text>
          <Text style={css.post_owner_own}>{post.owner.own}</Text>
        </View>
      </View>

      <View>
        {post.content?.length > 0 && (
          <Text style={css.post_content}>{post.content}</Text>
        )}
      </View>

      {post.imgList?.length > 0 && <ImageGrid imgList={post.imgList} />}

      <View style={css.post_footer}>
        {[
          { id: '1', Icon: ShareIcon, num: post.share_num },
          { id: '2', Icon: CommentIcon, num: post.comment_num },
          { id: '3', Icon: LikeIcon, num: post.like_num },
        ].map(({ id, Icon, num }) => (
          <View key={id} style={css.post_footer_item}>
            <Icon style={{ marginRight: 3 }} width={20} height={20} />
            <Text style={{ color: secondary, fontSize: 13 }}>{num || 0}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
