import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'
import SearchIcon from '@/assets/icon/icon_search.svg'
import { secondary } from '@/config/style.config'
import { useNavigation } from '@react-navigation/native'

export default ({ style }) => {
  const nav = useNavigation()
  const css = StyleSheet.create({
    page: {
      height: '100%',
      backgroundColor: 'white',
    },
    inputWrapper: {
      height: 40,
      paddingHorizontal: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 40 / 2,
      backgroundColor: '#f4f4f4',
    },
    sec: {
      paddingHorizontal: 15,
    },
    sec_title: {
      fontWeight: 'bold',
    },
    hot_list: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    hot_item: {
      width: '50%',
      flexDirection: 'row',
      alignItems: 'center',
    },
  })

  return (
    <View style={css.page}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <View style={{ ...style, ...css.inputWrapper }}>
          <SearchIcon width={20} height={20} />
          <TextInput
            style={{ flex: 1, height: '100%' }}
            placeholder="搜一搜"
            selectionColor={secondary}
            autoFocus={true}
            maxLength={50}
          />
        </View>
        <TouchableWithoutFeedback onPress={() => nav.goBack()}>
          <Text style={{ marginLeft: 15, fontSize: 16, color: secondary }}>
            取消
          </Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={css.sec}>
        <Text style={css.sec_title}>热搜</Text>
        <View style={css.hot_list}>
          {[{ content: '' }, {}, {}].map(({ content }, i) => (
            <TouchableWithoutFeedback>
              <View style={css.hot_item}>
                <Text>{i + 1}</Text>
                <Text>123</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    </View>
  )
}
