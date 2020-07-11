import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Alert,
  BackHandler,
} from 'react-native'
import EmojiSelector, { Categories } from 'react-native-emoji-selector'
import { useNavigation } from '@react-navigation/native'
import { primary, lightGray } from '@/config/style.config'

import TextArea from '@comp/TextArea'
import ImagePicker from '@comp/ImagePicker'
import PhotoPreview from '@comp/PhotoPreview'

import BackIcon from '@icon/icon_back.svg'
import ImageIcon from '@icon/icon_image.svg'
import HappyIcon from '@icon/icon_happy.svg'
import { ScrollView } from 'react-native-gesture-handler'

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
  const [imgList, setImgList] = useState([])
  const [currAction, setCurrAction] = useState(0)

  const backAction = () => {
    if (content.length > 0 || imgList.length > 0) {
      Alert.alert(null, '确定退出编辑吗？', [
        { text: '取消', onPress: () => null, style: 'cancel' },
        {
          text: '确定',
          onPress: () => nav.goBack(),
        },
      ])
      return true
    }
    return false
  }
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    )
    return () => backHandler.remove()
  })

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
        <TextArea
          placeholder="这一刻的想法..."
          multiline={true}
          numberOfLines={5}
          onChangeText={text => setContent(text)}
          onInputFocus={() => setCurrAction(null)}
        />
      </View>

      <ImagePicker style={{ padding: 15 }} onChange={setImgList} />

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
        {currAction === 1 && (
          <ScrollView style={{ height: 200 }}>
            <EmojiSelector
              category={Categories.emotion}
              columns={10}
              showSearchBar={false}
              onEmojiSelected={emoji => setContent(`${content}${emoji}`)}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  )
}
