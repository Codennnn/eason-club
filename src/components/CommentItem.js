import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { secondary } from '@/config/style.config'

import Avatar from './Avatar'
import LikeIcon from '@icon/icon_like.svg'

export default ({ style, data }) => {
  const nav = useNavigation()

  return (
    <View style={[{ padding: 15, backgroundColor: 'white' }, style]}>
      <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
        <Avatar
          style={{ marginRight: 15 }}
          clickFunc={() => nav.navigate('Club')}
        />
        <View>
          <Text style={{ color: secondary }}>{data.name}</Text>
          <Text style={{ color: '#bbb', fontSize: 11 }}>{data.created_at}</Text>
        </View>

        <TouchableWithoutFeedback>
          <LikeIcon style={{ marginLeft: 'auto' }} width={15} height={15} />
        </TouchableWithoutFeedback>
      </View>

      <View style={{ paddingLeft: 60 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ marginBottom: 10, lineHeight: 20 }}>
            {data.content}
          </Text>
          <View
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: '#f4f4f4',
            }}>
            <View>
              {data.replies.map(({ name, content }, i) => (
                <Text key={i} style={{ color: '#444' }} numberOfLines={2}>
                  <Text style={{ color: '#2f71f0' }}>{name}</Text>：{content}
                </Text>
              ))}
              <TouchableNativeFeedback onPress={() => nav.navigate('Club')}>
                <Text style={{ color: '#2f71f0' }}>
                  共{data.total_replies}条回复 >
                </Text>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
