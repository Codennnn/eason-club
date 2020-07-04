import React from 'react'
import { Modal, View, TouchableWithoutFeedback } from 'react-native'

export default ({ children, transparent, closeModal, ...props }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
      hardwareAccelerated={true}
      {...props}>
      <TouchableWithoutFeedback onPress={() => closeModal()}>
        <View style={[{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
