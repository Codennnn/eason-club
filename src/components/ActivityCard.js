import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
} from 'react-native'

const css = StyleSheet.create({
  card: {
    width: '100%',
  },
})

export default ({ style, title, content, cover_url }) => {
  const localAvatar = require('@img/default_avatar.png')
  const [imgSrc, setImgSrc] = useState(
    cover_url > 0 ? { uri: cover_url } : localAvatar,
  )

  return (
    <TouchableWithoutFeedback>
      <View style={[css.card, style]}>
        <Image
          source={imgSrc}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
          onError={() => setImgSrc(localAvatar)}
        />
        <Text style={{ marginTop: 20, marginBottom: 6, fontSize: 18 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 12, color: '#aaa' }} numberOfLines={2}>
          {content}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
