import { NativeBaseProvider } from 'native-base'
import React from 'react'

import { theme } from './theme'

export const ThemeProvider: React.FC = ({ children }) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
}
