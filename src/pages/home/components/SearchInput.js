import React from 'react'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  View,
} from 'react-native'
import SearchIcon from '@/assets/icon/icon_search.svg'

export default ({ style, clickFunc }) => {
  const css = StyleSheet.create({
    inputWrapper: {
      height: 36,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 36 / 2,
      backgroundColor: '#f4f4f4',
    },
  })

  return (
    <TouchableWithoutFeedback onPress={() => clickFunc()}>
      <View style={[style, css.inputWrapper]}>
        <SearchIcon width={20} height={20} />
        <TextInput style={{ flex: 1 }} editable={false} />
      </View>
    </TouchableWithoutFeedback>
  )
}
