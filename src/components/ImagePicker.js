import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'

import ImagesIcon from '@icon/icon_images.svg'

const css = StyleSheet.create({
  grid: {
    width: '100%',
    marginHorizontal: -3,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imgWrapper: {
    width: '33.3%',
    aspectRatio: 1,
    padding: 3,
    marginBottom: -2,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
})

export default ({ style, imgList }) => {
  return (
    <View style={[css.grid, style]}>
      {imgList?.map((uri, i) => (
        <TouchableWithoutFeedback key={i} onPress={() => { }}>
          <View style={[style, css.imgWrapper]}>
            <Image source={{ uri }} style={css.img} />
          </View>
        </TouchableWithoutFeedback>
      ))}
      <TouchableWithoutFeedback onPress={() => { }}>
        <View
          style={[
            style,
            css.imgWrapper,
            {
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              borderStyle: 'dashed',
              borderWidth: 1,
              borderColor: '#aaa',
            },
          ]}>
          <ImagesIcon style={{ opacity: 0.5 }} width={28} height={28} />
          <Text style={{ marginTop: 10, fontSize: 12, color: '#aaa' }}>
            添加图片
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}
