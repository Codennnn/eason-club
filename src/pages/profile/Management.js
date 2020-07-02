import React from 'react'
import { Dimensions, SafeAreaView, View, Text } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

import EditIcon from '@icon/ma_edit.svg'
import ApertureIcon from '@icon/ma_aperture.svg'
import ColorIcon from '@icon/ma_color.svg'
import CloudIcon from '@icon/ma_cloud.svg'
import UserIcon from '@icon/ma_user.svg'
import TaskIcon from '@icon/ma_task.svg'
import GolfIcon from '@icon/ma_golf.svg'
import NewspaperIcon from '@icon/ma_newspaper.svg'

const blocks = [
  { label: '编辑主页', Icon: EditIcon },
  { label: '编辑风采', Icon: ColorIcon },
  { label: '发布任务', Icon: TaskIcon },
  { label: '查看空闲', Icon: CloudIcon },
  { label: '成员管理', Icon: UserIcon },
  { label: '发送动态', Icon: ApertureIcon },
  { label: '新建活动', Icon: GolfIcon },
  { label: '发布投票', Icon: NewspaperIcon },
]

export default () => {
  return (
    <SafeAreaView style={{ paddingVertical: 20 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {blocks.map(({ Icon, label }) => (
          <View
            style={{
              width: Dimensions.get('window').width / 3,
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <TouchableNativeFeedback>
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
