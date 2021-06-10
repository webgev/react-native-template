import React from 'react'
import { ThemeProvider } from 'styled-components'

import { LocaleProvider, TranslateProvider } from '~/lib'
import { theme } from '~/theme'

export const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider>
        <TranslateProvider>{children}</TranslateProvider>
      </LocaleProvider>
    </ThemeProvider>
  )
}
