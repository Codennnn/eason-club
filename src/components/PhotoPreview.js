import React, { useEffect, useState } from 'react'
import { Dimensions, View, TouchableNativeFeedback, Image } from 'react-native'
import CameraRoll from '@react-native-community/cameraroll'

export default () => {
  const photoSize = Dimensions.get('window').width / 4
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    CameraRoll.getPhotos({
      first: 8,
      assetType: 'Photos',
    }).then(res => {
      console.log(res)
      setPhotos(res.edges)
    })
  }, [])

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {photos.map(({ node }, i) => (
        <View
          key={i}
          style={{
            width: photoSize,
            height: photoSize,
            padding: 1.5,
          }}>
          <TouchableNativeFeedback>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={{ uri: node.image.uri }}
            />
          </TouchableNativeFeedback>
        </View>
      ))}
    </View>
  )
}
