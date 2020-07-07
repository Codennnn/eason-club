import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'

export default ({
  style,
  textInputStyle,
  showCount,
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
        {...props}
      />
      {showCount && (
        <Text>
          {content.length} / {maxLength}
        </Text>
      )}
    </View>
  )
}
