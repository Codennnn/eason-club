import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { secondary, lightGray } from '@/config/style.config'

import ImageGrid from '@comp/ImageGrid'

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
    section_content: {
      color: lightGray,
      textAlign: 'justify',
    },
  })

  return (
    <ScrollView style={[{ paddingVertical: 20, paddingHorizontal: 15 }, style]}>
      <View>
        <View style={css.section}>
          <Text style={css.section_title}>社团简介</Text>
          <Text style={css.section_content}>
            新媒体工作部是负责软件系宣传工作的部门。作为系内的信息传播中心，我们致力于打造优秀的微信公众号，同时结合软讯
            | 宣传视频 |
            电子海报等途径向广大同学传播系内最新资讯。在这里，你不仅能学会公众号图文排版
            || 图片加工 ||
            视频特效处理等技术，还能完美地发挥自己的专业知识。加入我们你不需要任何基础，只要你拥有一个有趣的灵魂，我们将让你拥有满腹的才华。
          </Text>
        </View>
        <View style={css.section}>
          <Text style={css.section_title}>社团荣誉</Text>
          {/* <Text style={css.section_content}>
            你嗅觉敏锐，紧跟热点，立志关注天下时事
            你钟情文字，喜欢摄影，欣赏美妙的图文排版
            你热爱设计，痴迷ps技术，追求酷炫的视频 那么，欢迎加入新媒体工作部！
          </Text> */}
          <ImageGrid
            style={{ zIndex: 1000 }}
            imgList={[
              'http://mmbiz.qpic.cn/mmbiz_png/GNR9FMpbFX1NdvgfOsicefvyicMIE1dhuzYgnzkiaFLJfvEFwAYlHR9EppCG4GoZVY2EZRrYQXjYPX1VsicPuqHSZw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
              'http://mmbiz.qpic.cn/mmbiz_png/GNR9FMpbFX1NdvgfOsicefvyicMIE1dhuzibelDrEjicJKE3TLO8IshstZIicdGoZqzVMCgiaKicicX3ecEq3zYN7jweOw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
              'http://mmbiz.qpic.cn/mmbiz_png/GNR9FMpbFX1NdvgfOsicefvyicMIE1dhuzctgC8maZ7f29oLt9cIojdmRtLcYcJprByWl03mdOK6ky5ficUDBZ1Yw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            ]}
          />
        </View>
        <View style={css.section}>
          <Text style={css.section_title}>社团历史</Text>
          <Text style={css.section_content}>成立于2008年5月20日</Text>
        </View>
      </View>
    </ScrollView>
  )
}
