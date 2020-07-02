import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { primary, secondary } from '@/config/style.config'

import Avatar from '@comp/Avatar'

import DownIcon from '@icon/icon_down.svg'
import VIcon from '@icon/icon_v.svg'

const css = StyleSheet.create({
  club_header: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  club_header_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  club_header_bottom: {
    paddingHorizontal: 2,
  },
  follow_btn: {
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  drop_btn: {
    width: 30,
    height: 30,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 5,
  },
})

export default ({ avatar_url, name, introduction = '还没有写简介呢~~' }) => {
  return (
    <View style={css.club_header}>
      <View style={css.club_header_top}>
        <Avatar src={avatar_url} size={90} />
        <View style={{ marginLeft: 40, flex: 1 }}>
          <View
            style={{
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {[
              { value: '1.2w', label: '粉丝' },
              { value: '76', label: '关注' },
              { value: '61.5w', label: '获赞' },
            ].map(({ value, label }, i) => (
              <View key={label} style={{ flexDirection: 'row' }}>
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ marginBottom: 4, fontSize: 18 }}>{value}</Text>
                  <Text style={{ fontSize: 11, color: secondary }}>
                    {label}
                  </Text>
                </View>
                {i <= 1 && (
                  <View
                    style={{
                      width: 1,
                      height: 20,
                      marginTop: 18,
                      marginLeft: 35,
                      backgroundColor: '#ccc',
                    }}
                  />
                )}
              </View>
            ))}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={css.follow_btn}>
              <TouchableWithoutFeedback>
                <Text style={{ color: '#aaa' }}>已关注</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={css.drop_btn}>
              <TouchableWithoutFeedback>
                <DownIcon width={20} height={20} />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>

      <View style={css.club_header_bottom}>
        <Text style={{ fontSize: 18, color: primary }}>{name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <VIcon width={20} />
          <Text style={{ fontSize: 12, color: '#444' }}>意想社团认证：</Text>
          <Text style={{ fontSize: 12, color: '#444' }}>
            广大华软软件系组织
          </Text>
        </View>

        <TouchableWithoutFeedback>
          <View>
            <Text
              style={{ paddingHorizontal: 4, fontSize: 12, color: secondary }}>
              {introduction}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
