import React, { useState } from 'react'
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  View,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

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
  const [showModal, setShowModal] = useState(false)

  const onShowModal = () => {
    setShowModal(true)
  }

  return (
    <View style={css.grid}>
      <StatusBar animated={true} hidden={showModal} />
      <Modal visible={showModal} transparent={true}>
        <ImageViewer
          imageUrls={imgList.map(url => ({ url }))}
          enableSwipeDown={true}
          onCancel={() => setShowModal(false)}
        />
      </Modal>
      {imgList.map((uri, i) => (
        <TouchableWithoutFeedback key={i} onPress={onShowModal}>
          <View style={{ ...style, ...css.imgWrapper }}>
            <Image source={{ uri }} style={css.img} />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  )
}
