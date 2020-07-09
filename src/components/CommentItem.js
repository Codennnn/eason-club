import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { secondary, lightGray } from '@/config/style.config'

import Avatar from './Avatar'
import LikeIcon from '@icon/icon_like.svg'

export default ({ style, data }) => {
  const nav = useNavigation()

  const css = StyleSheet.create({
    item: { padding: 15, backgroundColor: 'white' },
    item_header: { flexDirection: 'row', alignItems: 'center' },
    reply: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#f4f4f4',
    },
  })

  return (
    <View style={[css.item, style]}>
      <View style={css.item_header}>
        <Avatar
          style={{ marginRight: 15 }}
          clickFunc={() => nav.navigate('Club')}
          src={data.avatar_url}
        />
        <View>
          <Text style={{ color: secondary }}>{data.name}</Text>
          <Text style={{ color: '#bbb', fontSize: 11 }}>{data.created_at}</Text>
        </View>

        <TouchableWithoutFeedback>
          <View
            style={{
              marginLeft: 'auto',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ marginRight: 5, color: lightGray, fontSize: 12 }}>
              {data.like_num || ''}
            </Text>
            <LikeIcon width={15} height={15} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={{ paddingLeft: 60 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ marginBottom: 10, lineHeight: 20 }}>
            {data.content}
          </Text>
          <View style={css.reply}>
            <View>
              {data.replies.map(({ name, content }, i) => (
                <Text key={i} style={{ color: '#444' }} numberOfLines={2}>
                  <Text style={{ color: '#2f71f0' }}>{name}</Text>：{content}
                </Text>
              ))}
              <TouchableNativeFeedback onPress={() => nav.navigate('Club')}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#2f71f0' }}>
                    共{data.total_replies}条回复 >
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
