import React, { useEffect, useState, useCallback } from 'react'
import {
  PermissionsAndroid,
  Platform,
  Dimensions,
  FlatList,
  ActivityIndicator,
  View,
  TouchableNativeFeedback,
  Image,
} from 'react-native'
import CameraRoll from '@react-native-community/cameraroll'
import { primary } from '@/config/style.config'

export default () => {
  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE

    const hasPermission = await PermissionsAndroid.check(permission)
    if (hasPermission) {
      return true
    }

    const status = await PermissionsAndroid.request(permission)
    return status === 'granted'
  }

  const photoSize = Dimensions.get('window').width / 4
  const [loading, setLoading] = useState(false)
  const [hasPermission, setHasPermission] = useState(false)
  const [photos, setPhotos] = useState([])

  const getPhotos = useCallback(() => {
    ; (async () => {
      if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
        return
      }
      CameraRoll.getPhotos({
        first: 12,
        assetType: 'Photos',
      })
        .then(res => {
          setPhotos(res.edges)
        })
        .finally(() => {
          setLoading(false)
        })
    })()
  }, [])

  useEffect(() => {
    setLoading(true)
    getPhotos()
  }, [getPhotos])

  return (
    <View style={{ height: photoSize * 2, justifyContent: 'center' }}>
      {loading ? (
        <View style={{ justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={primary} />
        </View>
      ) : (
          <FlatList
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
        )}
    </View>
  )
}
