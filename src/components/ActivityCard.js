import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableNativeFeedback,
  TouchableHighlight,
  View,
  Text,
  Image,
} from 'react-native'
import { secondary } from '@/config/style.config'

const css = StyleSheet.create({
  card: {
    width: '100%',
    overflow: 'hidden',
  },
})

export default ({ style, title, content, cover_url, created_at }) => {
  const localAvatar = require('@img/default_avatar.png')
  const [imgSrc, setImgSrc] = useState(
    cover_url > 0 ? { uri: cover_url } : localAvatar,
  )

  return (
    <View style={[css.card, style]}>
      <TouchableHighlight
        activeOpacity={0.95}
        underlayColor="#eee"
        onPress={() => {}}>
        <View>
          <Image
            source={imgSrc}
            style={{
              width: '100%',
              height: 180,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
            onError={() => setImgSrc(localAvatar)}
          />
          <Text style={{ marginTop: 20, marginBottom: 6, fontSize: 18 }}>
            {title}
          </Text>
          <Text
            style={{ fontSize: 13, lineHeight: 20, color: secondary }}
            numberOfLines={2}>
            {content}
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 12, color: '#aaa' }}>{created_at}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  )
}
