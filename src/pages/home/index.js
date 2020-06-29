import React from 'react'
import {
  View,
  Text,
  Button,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'

export default function ({ navigation }) {
  const routeTo = routeName => {
    navigation.navigate(routeName)
  }
  const plates = [
    {
      label: '社团招新',
      icon: require('../../assets/image/home_new.png'),
      routeName: 'Activity',
    },
    {
      label: '社团活动',
      icon: require('../../assets/image/home_activity.png'),
      routeName: 'Activity',
    },
    {
      label: '社团推荐',
      icon: require('../../assets/image/home_like.png'),
      routeName: 'Activity',
    },
    {
      label: '寻找社团',
      icon: require('../../assets/image/home_search.png'),
      routeName: 'Activity',
    },
  ]

  return (
    <View
      style={{
        width: '100%',
        flex: 1,
      }}>
      <View style={{ height: 50 }}>
        <View
          style={{
            width: '100%',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          {plates.map(({ icon, label, routeName }) => (
            <TouchableWithoutFeedback
              key={label}
              onPress={() => routeTo(routeName)}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={icon} style={{ width: 40, height: 40 }} />
                <Text style={{ fontSize: 12 }}>{label}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="to" onPress={() => console.warn(1)} />
      </View>
    </View>
  )
}
