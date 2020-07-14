import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import SearchInput from '@comp/SearchInput'
import Avatar from '@comp/Avatar'

import CubeIcon from '@/assets/icon/icon_cube.svg'
import MailIcon from '@/assets/icon/icon_mail.svg'

export default () => {
  const nav = useNavigation()
  const [avatar, setAvatar] = useState('')
  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ; (async () => {
      const userInfo = await AsyncStorage.getItem('use_info')
      setAvatar(userInfo && JSON.parse(userInfo).avatar)
    })()
  }, [])

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Avatar src={avatar} />
        <SearchInput
          style={{ flex: 1, marginHorizontal: 20 }}
          editable={false}
          clickFunc={() => nav.navigate('Search')}
        />
        <CubeIcon style={{ marginRight: 10 }} width={25} height={25} />
        <MailIcon width={25} height={25} />
      </View>
    </View>
  )
}
