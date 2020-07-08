import React, { useState } from 'react'
import { SafeAreaView, TextInput, View, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

import TextArea from '@comp/TextArea'

export default () => {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const onChange = (e, selectedDate) => {
    setDate(selectedDate || date)
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
        <View style={{ flexDirection: 'row' }}>
          <Text>任务截止日期</Text>
          <Text onPress={() => setShowDatePicker(true)}>选择日期</Text>
          <Text onPress={() => setShowDatePicker(true)}>选择时间</Text>
        </View>
        <Text>选择社团成员</Text>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          is24Hour={true}
          onChange={onChange}
          onTouchCancel={() => setShowDatePicker(false)}
        />
      )}
    </SafeAreaView>
  )
}
