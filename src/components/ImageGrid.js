import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native'

const css = StyleSheet.create({
  grid: {
    width: '100%',
    marginHorizontal: -3,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imgWrapper: {
    width: '33.3%',
    padding: 3,
    marginBottom: -2,
    height: Dimensions.get('window').width / 3 - 10,
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
    <View style={css.grid}>
      {imgList.map((uri, i) => (
        <TouchableWithoutFeedback key={i}>
          <View style={{ ...style, ...css.imgWrapper }}>
            <Image source={{ uri }} style={css.img} />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  )
}
