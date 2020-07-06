import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Ripple from 'react-native-material-ripple'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { primary, secondary, lightGray, menuStyle } from '@/config/style.config'

import Avatar from './Avatar'
import ImageGrid from './ImageGrid'

import MoreIcon from '@/assets/icon/icon_more.svg'
import ShareIcon from '@/assets/icon/icon_share.svg'
import CommentIcon from '@/assets/icon/icon_comment.svg'
import HeartIcon from '@/assets/icon/icon_heart.svg'
import VIcon from '@icon/icon_v.svg'
import DislikeIcon from '@icon/icon_dislike.svg'
import HandIcon from '@icon/icon_hand.svg'

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
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default ({ style, post, openActionSheet, renderFooter }) => {
  const nav = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={() => nav.navigate('PostDetail')}>
      <View style={[css.post_card, style]}>
        <View style={css.post_header}>
          <Avatar
            style={css.post_avatar}
            src={post?.owner.avatar_url}
            clickFunc={() => nav.navigate('Club')}
          />
          <View>
            <View style={css.post_owner_name}>
              <TouchableOpacity onPress={() => nav.navigate('Club')}>
                <Text
                  style={{ marginRight: 4, fontSize: 15, fontWeight: 'bold' }}>
                  {post?.owner.name}
                </Text>
              </TouchableOpacity>
              <VIcon width={24} />
            </View>
            <Text style={{ color: lightGray, fontSize: 11 }}>
              <Text>{post?.owner.own}</Text>
              <Text> - {post.created_at}</Text>
            </Text>
          </View>
          <View style={{ marginLeft: 'auto' }}>
            <Menu>
              <MenuTrigger style={{ padding: 6 }}>
                <MoreIcon fill={secondary} width={17} height={17} />
              </MenuTrigger>
              <MenuOptions customStyles={menuStyle}>
                <MenuOption>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <DislikeIcon width={20} height={20} />
                    <Text style={{ marginLeft: 5 }}>不感兴趣</Text>
                  </View>
                </MenuOption>
                <MenuOption>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <HandIcon width={20} height={20} />
                    <Text style={{ marginLeft: 5 }}>举报违规内容</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>

        <View>
          {post.content?.length > 0 && (
            <Text style={css.post_content}>{post.content}</Text>
          )}
        </View>

        {post.imgList?.length > 0 && <ImageGrid imgList={post.imgList} />}

        {renderFooter || (
          <View style={css.post_footer}>
            {[
              {
                id: '1',
                Icon: ShareIcon,
                num: post.share_num,
                label: '转发',
                clickFunc: () => openActionSheet(),
              },
              {
                id: '2',
                Icon: CommentIcon,
                num: post.comment_num,
                label: '评论',
                clickFunc: () => nav.navigate('PostDetail'),
              },
              {
                id: '3',
                Icon: HeartIcon,
                num: post.like_num,
                label: '点赞',
              },
            ].map(({ id, Icon, num, label, clickFunc }, i) => (
              <Ripple
                key={id}
                rippleOpacity={0.15}
                rippleContainerBorderRadius={20}
                style={css.post_footer_item}
                onPress={clickFunc}>
                <Icon style={{ marginRight: 3 }} width={20} height={20} />
                <Text
                  style={{
                    color: i === 2 && post.is_like ? primary : secondary,
                    fontSize: 13,
                  }}>
                  {num || label}
                </Text>
              </Ripple>
            ))}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}
