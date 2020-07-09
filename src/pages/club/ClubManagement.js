import React, { useRef } from 'react'
import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-easy-toast'

import EditIcon from '@icon/ma_edit.svg'
import ApertureIcon from '@icon/ma_aperture.svg'
import ColorIcon from '@icon/ma_color.svg'
import CloudIcon from '@icon/ma_cloud.svg'
import UserIcon from '@icon/ma_user.svg'
import TaskIcon from '@icon/ma_task.svg'
import GolfIcon from '@icon/ma_golf.svg'
import NewspaperIcon from '@icon/ma_newspaper.svg'

const blocks = [
  { label: '编辑主页', Icon: EditIcon, route: '' },
  { label: '编辑风采', Icon: ColorIcon, route: '' },
  { label: '发布任务', Icon: TaskIcon, route: 'TaskPost' },
  { label: '查看空闲', Icon: CloudIcon, route: '' },
  { label: '成员管理', Icon: UserIcon, route: '' },
  { label: '发送动态', Icon: ApertureIcon, route: 'Post' },
  { label: '新建活动', Icon: GolfIcon, route: '' },
  { label: '发布投票', Icon: NewspaperIcon, route: '' },
]

export default () => {
  const nav = useNavigation()
  const toast = useRef()

  return (
    <SafeAreaView style={{ paddingVertical: 20 }}>
      <Toast ref={toast} position="top" opacity={0.8} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {blocks.map(({ Icon, label, route }) => (
          <View
            key={label}
            style={{
              width: Dimensions.get('window').width / 3,
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <TouchableNativeFeedback
              onPress={() =>
                route
                  ? nav.navigate(route)
                  : toast.current.show('Ծ‸Ծ 暂无页面', 200)
              }>
              <View
                style={{
                  paddingVertical: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon style={{ marginBottom: 10 }} width={40} height={40} />
                <Text>{label}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}
