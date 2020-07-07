import React, { useState } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
  View,
  StatusBar,
  TouchableNativeFeedback,
} from 'react-native'
import { primary, secondary } from '@/config/style.config'

import CustomHeader from '@comp/CustomHeader'

const css = StyleSheet.create({
  form_title: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  form_title_line: {
    width: 50,
    height: 5,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 2.5,
    backgroundColor: primary,
  },
  form_item: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form_item_label: { minWidth: 100 },
  form_item_value: { flex: 1, color: secondary },
  input: { padding: 0, flex: 1, color: secondary },
})

export default () => {
  const [formData, setFormData] = useState({})
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <CustomHeader title="填写申请信息" />
      <ScrollView style={{ padding: 15, flex: 1, backgroundColor: 'white' }}>
        <View>
          <Text style={css.form_title}>社团信息</Text>
          <View style={css.form_title_line} />

          <View style={css.form_item}>
            <Text style={css.form_item_label}>社团名称</Text>
            <Text style={css.form_item_value}>意想社团</Text>
          </View>
          <View style={css.form_item}>
            <Text style={css.form_item_label}>所属组织</Text>
            <Text style={css.form_item_value}>广州大学华软软件系分团委</Text>
          </View>

          <Text style={css.form_title}>个人信息</Text>
          <View style={css.form_title_line} />
          <View>
            {[
              { key: 'name', label: '姓名', placeholder: '请填写姓名' },
              { key: 'team', label: '班级', placeholder: '请填写班级' },
              {
                key: 'specialty',
                label: '特长',
                placeholder: '(选填)你有什么特长？',
              },
            ].map(({ key, label, placeholder }) => (
              <View key={key} style={css.form_item}>
                <Text style={css.form_item_label}>{label}</Text>
                <TextInput
                  style={css.input}
                  placeholder={placeholder}
                  onChangeText={text =>
                    setFormData({ ...formData, [key]: text })
                  }
                />
              </View>
            ))}
          </View>

          <Text style={css.form_title}>联系方式</Text>
          <View style={css.form_title_line} />
          <View>
            {[
              { key: 'wechat', label: '微信', placeholder: '请填写微信号' },
              { key: 'qq', label: 'QQ', placeholder: '请填写QQ号' },
              {
                key: 'phone',
                label: '电话',
                placeholder: '请填写电话号码',
              },
            ].map(({ key, label, placeholder }) => (
              <View key={key} style={css.form_item}>
                <Text style={css.form_item_label}>{label}</Text>
                <TextInput
                  style={css.input}
                  placeholder={placeholder}
                  onChangeText={text =>
                    setFormData({ ...formData, [key]: text })
                  }
                />
              </View>
            ))}
          </View>
        </View>

        <View style={{ marginTop: 30, borderRadius: 10, overflow: 'hidden' }}>
          <TouchableNativeFeedback>
            <View
              style={{
                paddingVertical: 10,
                alignItems: 'center',
                backgroundColor: primary,
              }}>
              <Text>申请加入</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
