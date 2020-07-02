import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import Ripple from 'react-native-material-ripple'

const css = StyleSheet.create({
  tab: {
    paddingBottom: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#eee',
  },
})

const Button = props => {
  return (
    <Ripple
      rippleDuration={300}
      rippleOpacity={0.15}
      rippleContainerBorderRadius={20}
      {...props}>
      {props.children}
    </Ripple>
  )
}

const renderTab = (name, page, isTabActive, props) => {
  const { activeTextColor, inactiveTextColor, textStyle } = props
  const textColor = isTabActive ? activeTextColor : inactiveTextColor
  const fontWeight = isTabActive ? 'bold' : 'normal'

  return (
    <Button
      style={{ flex: 1 }}
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits="button"
      onPress={() => props.goToPage(page)}>
      <View style={[css.tab, props.tabStyle]}>
        <Text style={[{ color: textColor, fontWeight }, textStyle]}>
          {name}
        </Text>
      </View>
    </Button>
  )
}

const CustomTabBar = ({
  style,
  containerWidth,
  tabs,
  activeTab,
  scrollValue,
  backgroundColor,
  underlineStyle,
  ...props
}) => {
  const numberOfTabs = tabs.length
  const tabUnderlineStyle = {
    position: 'absolute',
    left: containerWidth / (numberOfTabs * 4) + 5,
    width: containerWidth / (numberOfTabs * 2) - 10,
    height: 4,
    backgroundColor: 'navy',
    bottom: 0,
  }

  const translateX = scrollValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, containerWidth / numberOfTabs],
  })

  return (
    <View style={[css.tabs, { backgroundColor: backgroundColor }, style]}>
      {tabs.map((name, page) => {
        const isTabActive = activeTab === page
        return renderTab(name, page, isTabActive, props)
      })}
      <Animated.View
        style={[
          tabUnderlineStyle,
          {
            transform: [{ translateX }],
          },
          underlineStyle,
        ]}
      />
    </View>
  )
}

module.exports = CustomTabBar
