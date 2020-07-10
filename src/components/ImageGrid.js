import React, { useState, useRef } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { menuStyle } from '@/config/style.config'

export default ({ style, imgList, columns = 4 }) => {
  const css = StyleSheet.create({
    grid: {
      width: '100%',
      marginHorizontal: -3,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    imgWrapper: {
      width: imgList.length === 1 ? '80%' : `${100 / columns}%`,
      aspectRatio: 1,
      padding: 3,
      marginBottom: -2,
    },
    img: {
      width: '100%',
      height: '100%',
      // resizeMode: 'cover',
      borderRadius: 15,
      overflow: 'hidden',
    },
  })

  const [showModal, setShowModal] = useState(false)
  const menu = useRef()

  const onShowModal = () => {
    setShowModal(true)
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
          imageUrls={imgList.map(url => ({ url }))}
          enableSwipeDown={true}
          useNativeDriver={true}
          backgroundColor="rgba(0,0,0,0.8)"
          pageAnimateTime={150}
          swipeDownThreshold={120}
          onClick={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
        />
      </Modal>
      {imgList.map((uri, i) => (
        <View key={i} style={[css.imgWrapper]}>
          <Menu ref={menu}>
            <MenuTrigger>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => onShowModal()}
                onLongPress={() => menu.current.open()}>
                <Image source={{ uri }} style={css.img} />
              </TouchableOpacity>
            </MenuTrigger>
            <MenuOptions customStyles={menuStyle}>
              <MenuOption>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ marginLeft: 5 }}>保存到手机</Text>
                </View>
              </MenuOption>
              <MenuOption>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ marginLeft: 5 }}>收藏</Text>
                </View>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      ))}
    </View>
  )
}
