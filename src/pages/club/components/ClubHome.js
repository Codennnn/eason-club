import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { secondary } from '@/config/style.config'

export default ({ style }) => {
  const css = StyleSheet.create({
    section: {
      marginBottom: 20,
    },
    section_title: {
      marginBottom: 5,
      fontSize: 16,
      fontWeight: 'bold',
      color: secondary,
    },
  })

  return (
    <ScrollView style={[{ padding: 15 }, style]}>
      <View>
        <View style={css.section}>
          <Text style={css.section_title}>社团简介</Text>
          <Text>123</Text>
        </View>
        <View style={css.section}>
          <Text style={css.section_title}>社团荣誉</Text>
          <Text>123</Text>
        </View>
        <View style={css.section}>
          <Text style={css.section_title}>社团历史</Text>
          <Text>成立于2008年5月20日</Text>
        </View>
      </View>
    </ScrollView>
  )
}
