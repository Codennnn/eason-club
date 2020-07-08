import React, { useState } from 'react'
import { Platform, SafeAreaView, TextInput, View, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { primary, lightGray } from '@/config/style.config'
import dayjs from 'dayjs'

import TextArea from '@comp/TextArea'

import TimeIcon from '@icon/icon_time.svg'
import PersonAddIcon from '@icon/icon_person_add.svg'

export default () => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (e, selectedDate) => {
    console.log(selectedDate)
    if (mode === 'date') {
      setDate(selectedDate || date)
    } else {
      setTime(selectedDate || time)
    }
    setShow(Platform.OS === 'ios')
  }

  const css = {
    item: { paddingVertical: 20, flexDirection: 'row', alignItems: 'center' },
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: 'white' }}>
      <TextInput
        placeholder="任务标题"
        style={{ fontSize: 20, fontWeight: 'bold' }}
      />
      <View
        style={{
          paddingVertical: 5,
          borderRadius: 10,
          backgroundColor: '#f8f8f8',
        }}>
        <TextArea
          placeholder="描述一下这个任务"
          showCount={true}
          countStyle={{ marginRight: 5 }}
        />
      </View>

      <View>
        <View style={css.item}>
          <TimeIcon width={25} height={25} />
          <Text>任务截止日期</Text>
          <Text style={{ marginLeft: 'auto', color: lightGray }}>
            <Text
              onPress={() => {
                setMode('date')
                setShow(true)
              }}>
              {dayjs(date).format('YYYY-MM-DD') || '选择日期'}{' '}
            </Text>
            <Text
              onPress={() => {
                setMode('time')
                setShow(true)
              }}>
              {'  '}
              {dayjs(time).format('HH:mm') || '选择时间'}
            </Text>
          </Text>
        </View>
        <Text>选择社团成员</Text>
      </View>

      {show && (
        <DateTimePicker
          mode={mode}
          value={date}
          is24Hour={true}
          onChange={onChange}
        />
      )}

      <View
        style={{
          marginTop: 'auto',
          paddingVertical: 15,
          alignItems: 'center',
          backgroundColor: primary,
          borderRadius: 15,
        }}>
        <Text>创建任务</Text>
      </View>
    </SafeAreaView>
  )
}
