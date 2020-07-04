import React, { useRef, useEffect } from 'react'
import { Animated, View, Text, TouchableWithoutFeedback } from 'react-native'

import Friend from '@img/friend.svg'
import Wechat from '@img/wechat.svg'
import Weibo from '@img/weibo.svg'
import QQ from '@img/qq.svg'

export default ({ style, visible, onCancel }) => {
  const pos = useRef(new Animated.Value(220)).current
  // useEffect(() => {
  //   Animated.timing(pos, {
  //     toValue: 0,
  //     duration: 200,
  //     useNativeDriver: true,
  //   }).start()
  // }, [pos])

  useEffect(() => {
    if (visible) {
      // console.log(1111)
      Animated.timing(pos, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start()
    } else {
      // console.log(2222)
      Animated.timing(pos, {
        toValue: 220,
        duration: 150,
        useNativeDriver: true,
      }).start()
    }
  })

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[
            {
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: 220,
              justifyContent: 'space-between',
              backgroundColor: 'white',
              borderRadius: 15,
              overflow: 'hidden',
              transform: [{ translateY: pos }],
            },
            style,
          ]}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ marginVertical: 15, fontSize: 16 }}>分享</Text>
          </View>

          <View
            style={{
              marginBottom: 10,
              padding: 15,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {[
              { Icon: Friend, label: '朋友圈' },
              { Icon: Wechat, label: '微信好友' },
              { Icon: QQ, label: 'QQ' },
              { Icon: Weibo, label: '微博' },
            ].map(({ Icon, label }) => (
              <TouchableWithoutFeedback key={label}>
                <View style={{ alignItems: 'center' }}>
                  <Icon />
                  <Text style={{ marginTop: 8, fontSize: 12 }}>{label}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>

          <TouchableWithoutFeedback onPress={() => onCancel()}>
            <View
              style={{
                paddingVertical: 15,
                alignItems: 'center',
                borderTopWidth: 1,
                borderTopColor: '#ededed',
              }}>
              <Text>取消</Text>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
}
