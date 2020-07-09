import React, { useState } from 'react'
import { Platform, SafeAreaView, TextInput, View, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { primary, lightGray } from '@/config/style.config'
import dayjs from 'dayjs'

import TextArea from '@comp/TextArea'

import TimeIcon from '@icon/icon_time.svg'
import PersonAddIcon from '@icon/icon_person_add.svg'
import ArrowIcon from '@icon/icon_chevron.svg'

export default () => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [selectedMember, setSelectedMember] = useState(0)

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
    item_label: { marginLeft: 10 },
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: 'white' }}>
      <TextInput
        placeholder="任务标题"
        style={{ fontSize: 20, fontWeight: 'bold' }}
      />
      <View
        style={{
          marginTop: 10,
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

      <View style={{ marginTop: 20 }}>
        <View
          style={[
            css.item,
            { borderBottomWidth: 1, borderBottomColor: '#eee' },
          ]}>
          <TimeIcon width={25} height={25} />
          <Text style={css.item_label}>任务截止日期</Text>
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

        <View style={css.item}>
          <PersonAddIcon width={25} height={25} />
          <Text style={css.item_label}>选择社团成员</Text>
          <View
            style={{
              marginLeft: 'auto',
              flexDirection: 'row',
              alignItems: 'center',
              color: lightGray,
            }}>
            <Text>
              已选择
              <Text
                style={{
                  color: primary,
                  fontWeight: 'bold',
                }}>
                {' '}
                {selectedMember}{' '}
              </Text>
              个
            </Text>
            <ArrowIcon width={20} height={20} />
          </View>
        </View>
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
