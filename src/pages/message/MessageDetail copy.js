import React from 'react'
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { primary, secondary } from '@/config/style.config'

import CustomHeader from '@comp/CustomHeader'
import Avatar from '@comp/Avatar'
import MoreIcon from '@icon/icon_ellipsis_horizontal.svg'

import { messageList } from '@/mock-data'

function MessageItem({ sent, avatar_url, content }) {
  const nav = useNavigation()

  const css = {
    row: { flexDirection: 'row' },
    row_reverse: { flexDirection: 'row-reverse' },
    msg_content: {
      maxWidth: '65%',
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: 10,
    },
  }

  return (
    <View style={[{ marginBottom: 20 }, sent ? css.row_reverse : css.row]}>
      <Avatar src={avatar_url} clickFunc={() => nav.navigate('Club')} />
      <View
        style={[
          css.msg_content,
          sent
            ? {
                marginRight: 15,
                borderTopRightRadius: 0,
                backgroundColor: primary,
              }
            : {
                marginLeft: 15,
                backgroundColor: 'white',
                borderTopLeftRadius: 0,
              },
        ]}>
        <Text
          style={[{ lineHeight: 17 }, sent ? { color: 'white' } : {}]}
          selectable={true}>
          {content}
        </Text>
      </View>
    </View>
  )
}

export default () => {
  const nav = useNavigation()

  return (
    <View>
      <CustomHeader
        title="令狐少侠"
        action={
          <TouchableWithoutFeedback onPress={() => nav.navigate('Club')}>
            <MoreIcon
              style={{ marginRight: 10 }}
              fill={secondary}
              width={20}
              height={20}
            />
          </TouchableWithoutFeedback>
        }
      />
      <KeyboardAvoidingView
        // style={{ flex: 1, justifyContent: 'flex-end' }}
        // keyboardVerticalOffset={-37}
        behavior="height">
        <FlatList
          contentContainerStyle={{
            // flex: 1,
            // height: '40%',
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
          data={messageList}
          renderItem={({ item }) => <MessageItem key={item.id} {...item} />}
        />

        <View
          style={{
            justifyContent: 'flex-end',
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
            <TextInput placeholder="发个消息聊聊呗" />
          </View>
          <Text>发布</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}
