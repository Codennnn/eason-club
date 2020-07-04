import React, { useRef, useEffect } from 'react'
import { Animated, View, TouchableNativeFeedback, Text } from 'react-native'

export default ({ style }) => {
  // const fadeAnim = useRef(new Animated.Value(0)).current
  const pos = useRef(new Animated.Value(100)).current
  // useEffect(() => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 200,
  //     useNativeDriver: true,
  //   }).start()
  // }, [fadeAnim])
  useEffect(() => {
    Animated.timing(pos, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [pos])

  return (
    <View style={{ flex: 1 }}>
      <TouchableNativeFeedback>
        <Animated.View
          style={[
            {
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: 100,
              padding: 20,
              transform: [{ translateY: pos }],
              backgroundColor: 'white',
              // opacity: fadeAnim,
              borderRadius: 15,
            },
            style,
          ]}>
          <View>
            <Text>123</Text>
          </View>
        </Animated.View>
      </TouchableNativeFeedback>
    </View>
  )
}
