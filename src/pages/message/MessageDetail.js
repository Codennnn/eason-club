import React, { useState, useCallback, useEffect } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { useNavigation } from '@react-navigation/native'
import { primary, secondary } from '@/config/style.config'

import CustomHeader from '@comp/CustomHeader'
import MoreIcon from '@icon/icon_ellipsis_horizontal.svg'

export default () => {
  const [messages, setMessages] = useState([])
  const nav = useNavigation()

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
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
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  )
}
