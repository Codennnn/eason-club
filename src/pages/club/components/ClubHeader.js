import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { primary, secondary, lightGray } from '@/config/style.config'

import Avatar from '@comp/Avatar'

import RefreshIcon from '@icon/icon_refresh.svg'
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
    marginBottom: 20,
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

function Expand() {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>关注TA的也关注了</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RefreshIcon width={20} height={20} />
          <Text style={{ color: secondary }}>换一换</Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: -10,
          marginBottom: 15,
          flexDirection: 'row',
        }}>
        {[
          {
            name: '软件系记者部',
            avatar_url:
              'https://i0.hdslb.com/bfs/face/a2b1c390099c03103530ffa198bf020039850397.jpg_64x64.jpg',
            fans_num: '2.7w',
          },
          {
            name: '国贸系通联部',
            avatar_url:
              'https://i2.hdslb.com/bfs/face/5a2bf1243bce2403c7cd7b284882212492ee1370.jpg_64x64.jpg',
            fans_num: '528',
          },
          {
            name: '外语系小卖部',
            avatar_url:
              'https://i0.hdslb.com/bfs/face/9e18686bbbbd22bb764823157fecbf3416c0b92a.jpg_64x64.jpg',
            fans_num: '4.5k',
          },
        ].map((item, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              padding: 5,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '100%',
                padding: 10,
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: '#f4f4f4',
              }}>
              <Avatar src={item.avatar_url} size={60} />
              <Text
                numberOfLines={1}
                style={{
                  marginTop: 6,
                  marginBottom: 10,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 12, color: lightGray }}>
                {item.fans_num}
              </Text>
              <TouchableWithoutFeedback>
                <View
                  style={{
                    paddingVertical: 2,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: primary,
                    borderRadius: 5,
                  }}>
                  <Text style={{ fontSize: 12, color: primary }}>关注</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default ({ avatar_url, name, introduction = '还没有写简介呢~~' }) => {
  const [showExpand, setShowExpand] = useState(false)

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
                <Text style={{ color: lightGray }}>已关注</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={css.drop_btn}>
              <TouchableWithoutFeedback
                onPress={() => setShowExpand(!showExpand)}>
                <DownIcon
                  width={20}
                  height={20}
                  style={{
                    transform: [{ rotateZ: showExpand ? '180deg' : '0deg' }],
                  }}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>

      {showExpand && <Expand />}

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
