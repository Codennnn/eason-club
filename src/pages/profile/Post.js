import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'

import BackIcon from '@icon/icon_back.svg'
import ImagesIcon from '@icon/icon_images.svg'

const css = StyleSheet.create({
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  action_bar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
})

export default () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={css.header}>
        <BackIcon width={28} height={28} />
        <Text style={{ marginLeft: 15, fontSize: 16 }}>发布动态</Text>
        <TouchableWithoutFeedback>
          <Text style={{ marginLeft: 'auto' }}>发布</Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <TextInput
          placeholder="这一刻的想法..."
          multiline={true}
          numberOfLines={5}
        />
        {/* <ImagesIcon style={{ opacity: 0.5 }} width={28} height={28} /> */}
      </View>

      <View style={css.action_bar} />
    </SafeAreaView>
  )
}
