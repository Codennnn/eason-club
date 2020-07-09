import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Image, View } from 'react-native'

export default ({ style, src, clickFunc, rounded = true, size = 45 }) => {
  const localAvatar = require('@img/default_avatar.png')
  const [avatarSrc, setAvatarSrc] = useState()
  useEffect(() => {
    setAvatarSrc(src ? { uri: src } : localAvatar)
  }, [src, localAvatar])

  const avatarSize = size

  const css = StyleSheet.create({
    avatarWrapper: {
      width: avatarSize,
      height: avatarSize,
      borderRadius: rounded ? avatarSize / 2 : 10,
      borderWidth: 0.8,
      borderStyle: 'solid',
      borderColor: '#ddd',
      overflow: 'hidden',
    },
    avatarImg: {
      width: '100%',
      height: '100%',
    },
  })

  return (
    <TouchableWithoutFeedback onPress={() => clickFunc?.()}>
      <View style={[style, css.avatarWrapper]}>
        <Image
          style={css.avatarImg}
          source={avatarSrc}
          onError={() => setAvatarSrc(localAvatar)}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
