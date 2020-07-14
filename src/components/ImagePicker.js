import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Modal,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import ImageViewer from 'react-native-image-zoom-viewer'
import { lightGray } from '@/config/style.config'

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
    marginBottom: 2,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
})

export default ({ style, onChange }) => {
  const [imgList, setImgList] = useState([])
  const onPickImage = () => {
    ImagePicker.showImagePicker(
      {
        title: '选择图片',
        cancelButtonTitle: '取消',
        takePhotoButtonTitle: '相机拍摄',
        chooseFromLibraryButtonTitle: '从相册选择',
        mediaType: 'photo',
      },
      response => {
        if (response.didCancel) {
          // console.log('User cancelled image picker')
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error)
        } else if (response.customButton) {
          // console.log('User tapped custom button: ', response.customButton)
        } else {
          const source = { uri: response.uri }
          setImgList([source, ...imgList])
        }
      },
    )
  }
  useEffect(() => {
    onChange?.(imgList)
  }, [imgList, onChange])

  const [showModal, setShowModal] = useState(false)
  const [currPreview, setCurrPreview] = useState(0)

  const onShowModal = i => {
    setShowModal(true)
    setCurrPreview(i)
  }

  return (
    <View style={[css.grid, style]}>
      <Modal
        style={{ flex: 1, height: '100%' }}
        visible={showModal}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}>
        <ImageViewer
          index={currPreview}
          imageUrls={imgList.map(({ uri }) => {
            uri
          })}
          enableSwipeDown={true}
          useNativeDriver={true}
          backgroundColor="rgba(0,0,0,0.8)"
          pageAnimateTime={150}
          swipeDownThreshold={120}
          onClick={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
        />
      </Modal>

      {imgList?.map((img, i) => (
        <TouchableWithoutFeedback key={i} onPress={() => onShowModal(i)}>
          <View style={[css.imgWrapper]}>
            <Image source={img} style={css.img} />
          </View>
        </TouchableWithoutFeedback>
      ))}
      <TouchableWithoutFeedback key={1024} onPress={() => onPickImage()}>
        <View style={css.imgWrapper}>
          <View
            style={{
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              borderStyle: 'dashed',
              borderWidth: 1,
              borderColor: lightGray,
            }}>
            <ImagesIcon style={{ opacity: 0.5 }} width={28} height={28} />
            <Text style={{ marginTop: 10, fontSize: 12, color: lightGray }}>
              添加图片
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}
