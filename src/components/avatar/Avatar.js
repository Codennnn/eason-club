import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, Image, View } from 'react-native'

export default ({ style, src, size = 45 }) => {
  const avatarSrc = src ? { uri: src } : require('@img/default_avatar.png')
  const avatarSize = size

  const css = StyleSheet.create({
    avatarWrapper: {
      width: avatarSize,
      height: avatarSize,
      borderRadius: 22.5,
      borderStyle: 'solid',
      borderColor: '#ddd',
      borderWidth: 0.8,
      overflow: 'hidden',
    },
    avatarImg: {
      width: '100%',
      height: '100%',
    },
  })

  return (
    <TouchableWithoutFeedback>
      <View style={{ ...style, ...css.avatarWrapper }}>
        <Image source={avatarSrc} style={css.avatarImg} />
      </View>
    </TouchableWithoutFeedback>
  )
}
