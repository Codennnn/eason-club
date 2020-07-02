import React, { useState } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native'

import PhotoPreview from '@comp/PhotoPreview'

import BackIcon from '@icon/icon_back.svg'
import ImagesIcon from '@icon/icon_images.svg'
import ImageIcon from '@icon/icon_image.svg'
import HappyIcon from '@icon/icon_happy.svg'
import LocationIcon from '@icon/icon_location.svg'

const css = StyleSheet.create({
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  action: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
  },
  action_bar: {
    height: 50,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
})

export default () => {
  const [content, setContent] = useState('')

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={css.header}>
        <BackIcon width={28} height={28} />
        <Text style={{ marginLeft: 15, fontSize: 16 }}>发布动态</Text>
        <TouchableWithoutFeedback>
          <Text
            style={{
              marginLeft: 'auto',
              color: content?.trim().length > 0 ? null : '#aaa',
            }}>
            发布
          </Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <TextInput
          placeholder="这一刻的想法..."
          multiline={true}
          numberOfLines={5}
          onChangeText={text => setContent(text)}
        />
        {/* <ImagesIcon style={{ opacity: 0.5 }} width={28} height={28} /> */}
      </View>

      <View style={css.action}>
        <View style={css.action_bar}>
          <TouchableNativeFeedback>
            <ImageIcon
              style={{ marginRight: 20, opacity: 0.6 }}
              width={28}
              height={28}
            />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <HappyIcon
              style={{ marginRight: 16, opacity: 0.6 }}
              width={28}
              height={28}
            />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <LocationIcon
              style={{ marginRight: 20, opacity: 0.6 }}
              width={28}
              height={28}
            />
          </TouchableNativeFeedback>
        </View>

        <PhotoPreview />
      </View>
    </SafeAreaView>
  )
}
