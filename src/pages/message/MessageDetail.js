import React, { useState, useCallback, useEffect } from 'react'
import { View, TouchableWithoutFeedback, Text } from 'react-native'
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
      {
        _id: 2,
        text: 'Hello developer',
        createdAt: new Date('2020-06-21'),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 3,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar:
            'https://i2.hdslb.com/bfs/face/a543eab4bd089081c8cd9d70ca7a4cabf88dfc17.jpg@.webp',
        },
      },
    ])
  }, [])

  const onSend = useCallback((msg = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, msg))
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
        alignTop={true}
        renderAvatarOnTop={true}
        showUserAvatar={true}
        showAvatarForEveryMessage={true}
        renderTime={() => null}
        // renderCustomView={() => (
        //   <View>
        //     <Text>123</Text>
        //   </View>
        // )}
        user={{
          _id: 1,
          avatar:
            'https://i2.hdslb.com/bfs/face/a543eab4bd089081c8cd9d70ca7a4cabf88dfc17.jpg@.webp',
        }}
      />
    </>
  )
}
