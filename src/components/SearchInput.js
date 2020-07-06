import React, { useState, useRef } from 'react'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  View,
} from 'react-native'
import { lightGray } from '@/config/style.config'

import SearchIcon from '@icon/icon_search.svg'
import CloseIcon from '@/assets/icon/icon_close_circle.svg'

export default ({ style, clickFunc, inputStyle, ...props }) => {
  const searchInput = useRef()
  const [searchText, setSearchText] = useState('')

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
    <TouchableWithoutFeedback onPress={() => clickFunc?.()}>
      <View style={[css.inputWrapper, style]}>
        <SearchIcon width={20} height={20} />
        <TextInput
          style={[{ flex: 1, marginLeft: 5, padding: 0 }, inputStyle]}
          ref={searchInput}
          onChangeText={text => setSearchText(text)}
          {...props}
        />
        {searchText?.trim().length > 0 && (
          <TouchableWithoutFeedback
            onPress={() => {
              searchInput.current.clear()
              setSearchText('')
            }}>
            <CloseIcon
              style={{ marginLeft: 'auto' }}
              fill={lightGray}
              width={20}
              height={20}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}
