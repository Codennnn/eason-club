import React, { useState, useCallback, useEffect } from 'react'
import { View, TouchableWithoutFeedback, Text } from 'react-native'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { useNavigation } from '@react-navigation/native'
import { primary, secondary } from '@/config/style.config'

import CustomHeader from '@comp/CustomHeader'
import MoreIcon from '@icon/icon_ellipsis_horizontal.svg'

import { messages as msgs } from '@/mock-data'

export default () => {
  const [messages, setMessages] = useState([])
  const nav = useNavigation()

  useEffect(() => {
    setMessages(msgs)
  }, [])

  const onSend = useCallback((msg = []) => {
    setMessages(previousMessages => GiftedChat.prepend(previousMessages, msg))
  }, [])

  return (
    <>
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

      <GiftedChat
        messages={messages}
        onSend={msg => onSend(msg)}
        placeholder="发个消息聊聊呗~"
        inverted={false}
        alignTop={true}
        renderAvatarOnTop={true}
        showUserAvatar={true}
        showAvatarForEveryMessage={true}
        renderTime={() => null}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              textStyle={{
                left: {
                  fontSize: 15,
                },
                right: {
                  fontSize: 15,
                },
              }}
              wrapperStyle={{
                left: {
                  paddingVertical: 5,
                  paddingHorizontal: 8,
                  backgroundColor: 'white',
                },
                right: {
                  paddingVertical: 5,
                  paddingHorizontal: 8,
                  backgroundColor: primary,
                },
              }}
            />
          )
        }}
        user={{
          _id: 1,
          avatar:
            'https://portrait.gitee.com/uploads/avatars/user/1608/4826670_chinesee_1578975163.png!avatar200',
        }}
      />
    </>
  )
}
