import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />
    </SafeAreaView>
  )
}
