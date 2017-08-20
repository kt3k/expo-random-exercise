import React from 'react'
import { StyleSheet, WebView } from 'react-native'

export default () => (
  <WebView
    source={{ uri: 'https://www.google.com/' }}
    style={styles.webview}
  />
)

const styles = StyleSheet.create({
  webview: {
    marginTop: 20,
  },
})
