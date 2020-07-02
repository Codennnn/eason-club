import React, { useEffect, useState } from 'react'
import {
  Dimensions,
  FlatList,
  View,
  TouchableNativeFeedback,
  Image,
} from 'react-native'
import CameraRoll from '@react-native-community/cameraroll'

export default () => {
  const photoSize = Dimensions.get('window').width / 4
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    CameraRoll.getPhotos({
      first: 12,
      assetType: 'Photos',
    }).then(res => {
      setPhotos(res.edges)
    })
  }, [])

  return (
    <FlatList
      style={{ height: photoSize * 2 }}
      data={photos}
      numColumns={4}
      renderItem={({ item }, i) => (
        <View
          key={i}
          style={{
            width: photoSize,
            aspectRatio: 1,
            padding: 1.5,
          }}>
          <TouchableNativeFeedback>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={{ uri: item.node.image.uri }}
            />
          </TouchableNativeFeedback>
        </View>
      )}
    />
  )
}
