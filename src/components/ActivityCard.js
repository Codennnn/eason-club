import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import { primary, secondary, menuStyle } from '@/config/style.config'

import Avatar from '@comp/Avatar'
import MoreIcon from '@icon/icon_ellipsis_horizontal.svg'

const css = StyleSheet.create({
  card: {
    width: '100%',
    overflow: 'hidden',
  },
  card_title: { marginTop: 20, marginBottom: 6, fontSize: 18 },
  card_content: { fontSize: 13, lineHeight: 20, color: secondary },
})

export default ({
  style,
  title,
  content,
  cover_url,
  name,
  avatar_url,
  created_at,
}) => {
  const localAvatar = require('@img/default_avatar.png')
  const [imgSrc, setImgSrc] = useState(
    cover_url ? { uri: cover_url } : localAvatar,
  )
  const nav = useNavigation()

  return (
    <View style={[css.card, style]}>
      <TouchableNativeFeedback
        activeOpacity={0.95}
        underlayColor="#efefef"
        onPress={() => nav.navigate('Club')}>
        <View style={{ padding: 15 }}>
          <Image
            source={imgSrc}
            style={{
              width: '100%',
              height: 180,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
            onError={() => setImgSrc(localAvatar)}
          />
          <Text style={css.card_title}>{title}</Text>
          <Text style={css.card_content} numberOfLines={2}>
            {content}
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Menu style={{ marginTop: 20 }}>
              <MenuTrigger style={{ padding: 6 }}>
                <MoreIcon fill={secondary} width={20} height={20} />
              </MenuTrigger>
              <MenuOptions customStyles={menuStyle}>
                <MenuOption>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{ marginLeft: 5 }}>添加到收藏夹</Text>
                  </View>
                </MenuOption>
                <MenuOption>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{ marginLeft: 5 }}>举报此活动</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>

            <View style={{ marginTop: 10, marginLeft: 'auto' }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => nav.navigate('Club')}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ marginRight: 10, alignItems: 'flex-end' }}>
                    <Text style={{ color: primary, fontWeight: 'bold' }}>
                      {name}
                    </Text>
                    <Text style={{ fontSize: 11, color: '#bbb' }}>
                      {created_at}
                    </Text>
                  </View>
                  <Avatar
                    src={avatar_url}
                    clickFunc={() => nav.navigate('Club')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}
