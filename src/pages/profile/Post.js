import React, { useState } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native'
import { primary, lightGray } from '@/config/style.config'

import ImagePicker from '@comp/ImagePicker'
import PhotoPreview from '@comp/PhotoPreview'

import BackIcon from '@icon/icon_back.svg'
import ImageIcon from '@icon/icon_image.svg'
import HappyIcon from '@icon/icon_happy.svg'
import { useNavigation } from '@react-navigation/native'

const css = StyleSheet.create({
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  action: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
  },
  action_bar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
})

export default () => {
  const nav = useNavigation()
  const [content, setContent] = useState('')
  const [currAction, setCurrAction] = useState(0)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={css.header}>
        <TouchableWithoutFeedback onPress={() => nav.goBack()}>
          <BackIcon width={28} height={28} />
        </TouchableWithoutFeedback>
        <Text style={{ marginLeft: 15, fontSize: 16 }}>发布动态</Text>
        <TouchableWithoutFeedback>
          <Text
            style={{
              marginLeft: 'auto',
              color: content?.trim().length > 0 ? primary : lightGray,
            }}>
            发布
          </Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <TextInput
          placeholder="这一刻的想法..."
          multiline={true}
          numberOfLines={5}
          onChangeText={text => setContent(text)}
        />
      </View>

      <ImagePicker style={{ padding: 15 }} />

      <View style={css.action}>
        <View style={css.action_bar}>
          {[{ Icon: ImageIcon }, { Icon: HappyIcon }].map(({ Icon }, i) => (
            <TouchableNativeFeedback onPress={() => setCurrAction(i)}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  style={{ opacity: currAction === i ? 1 : 0.6 }}
                  width={28}
                  height={28}
                />
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>

        {currAction === 0 && <PhotoPreview />}
      </View>
    </SafeAreaView>
  )
}
