import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'

export default ({
  style,
  textInputStyle,
  showCount,
  onInputFocus,
  maxLength = 140,
  ...props
}) => {
  const [content, setContent] = useState('')

  return (
    <View style={[style]}>
      <TextInput
        style={[textInputStyle]}
        multiline={true}
        numberOfLines={5}
        textAlignVertical="top"
        onChangeText={text => setContent(text)}
        onFocus={() => onInputFocus?.()}
        {...props}
      />

      {showCount && (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginLeft: 'auto' }}>
            {content.length} / {maxLength}
          </Text>
        </View>
      )}
    </View>
  )
}
