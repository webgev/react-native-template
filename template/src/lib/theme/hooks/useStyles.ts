import { DependencyList, useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { useTheme } from 'styled-components'

import { ThemeType } from '../theme'

export interface StyleType {
  [key: string]: ViewStyle & TextStyle & ImageStyle
}

// eslint-disable-next-line no-restricted-imports

export const useStyles = <S>(
  factory: (theme: ThemeType) => S | StyleSheet.NamedStyles<S> | StyleType,
  deps: DependencyList,
) => {
  const theme = useTheme()
  return useMemo(() => {
    return StyleSheet.create(factory(theme))
    // @ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [factory, theme, ...deps])
}
