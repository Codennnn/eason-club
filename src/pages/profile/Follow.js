import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { menuStyle, lightGray } from '@/config/style.config'

import RefreshView from '@comp/RefreshView'
import Avatar from '@comp/Avatar'
import MoreIcon from '@icon/icon_ellipsis_horizontal.svg'

import { followList } from '@/mock-data'

export default () => {
  const nav = useNavigation()

  function renderItems(list, title) {
    return (
      <View
        style={{
          paddingTop: 10,
          backgroundColor: 'white',
        }}>
        <View style={{ paddingHorizontal: 14 }}>
          <Text style={{ fontSize: 16 }}>{title}</Text>
        </View>
        {list.map(({ name, intro, route = 'Home' }) => (
          <TouchableNativeFeedback
            key={name}
            onPress={() => nav.navigate(route)}>
            <View
              style={{
                paddingVertical: 12,
                paddingHorizontal: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Avatar rounded={false} style={{ marginRight: 15 }} />
              <View style={{ paddingRight: 120 }}>
                <Text style={{ fontSize: 16 }}>{name}</Text>
                <Text
                  style={{ marginTop: 3, fontSize: 12, color: lightGray }}
                  numberOfLines={1}>
                  {intro}
                </Text>
              </View>

              <Menu style={{ marginLeft: 'auto' }}>
                <MenuTrigger style={{ padding: 6 }}>
                  <MoreIcon fill="#ccc" width={20} height={20} />
                </MenuTrigger>
                <MenuOptions customStyles={menuStyle}>
                  <MenuOption>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text style={{ marginLeft: 5 }}>设为特别关注</Text>
                    </View>
                  </MenuOption>
                  <MenuOption>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text style={{ marginLeft: 5 }}>取消关注</Text>
                    </View>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView style={{ paddingTop: 12 }}>
        <RefreshView>
          {renderItems(followList.filter(el => el.top), '特别关注')}
          <View style={{ height: 15, backgroundColor: '#f4f4f4' }} />
          {renderItems(followList.filter(el => !el.top), '已关注')}
        </RefreshView>
      </ScrollView>
    </SafeAreaView>
  )
}
