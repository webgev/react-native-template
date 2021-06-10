import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'

import { Icons } from '~/assets'

export const App = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])

  return (
    <View style={styles.container}>
      <Icons.Logo />
      <Text>Hello Neat!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
