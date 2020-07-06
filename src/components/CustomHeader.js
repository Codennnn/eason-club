import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { secondary } from '@/config/style.config'

import BackIcon from '@icon/icon_back.svg'

export default ({ style, title, action }) => {
  const nav = useNavigation()

  const css = StyleSheet.create({
    bar: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  })

  return (
    <View style={[css.bar, style]}>
      <TouchableWithoutFeedback onPress={() => nav.goBack()}>
        <BackIcon style={{ marginRight: 15 }} width={28} height={28} />
      </TouchableWithoutFeedback>
      <Text style={{ fontSize: 16 }}>{title}</Text>

      <View style={{ marginLeft: 'auto' }}>{action}</View>
    </View>
  )
}
