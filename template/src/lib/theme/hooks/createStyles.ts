import { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { useTheme } from 'styled-components'

import { ThemeType } from '../theme'

interface StyleType {
  [key: string]: ViewStyle & TextStyle & ImageStyle
}

export function createStyles<S>(
  factory: (theme: ThemeType) => S | StyleSheet.NamedStyles<S> | StyleType,
) {
  const useStyles = () => {
    const theme = useTheme()

    return useMemo(() => {
      return StyleSheet.create(factory(theme))
    }, [theme])
  }

  return useStyles
}
