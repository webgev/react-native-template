import React from 'react'
import { ThemeProvider } from 'styled-components'

import { LocaleProvider, TranslateProvider } from '~/lib'
import { StoreProvider } from '~/lib/StoreProvider'
import { theme } from '~/theme'

export const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider>
        <TranslateProvider>
          <StoreProvider>{children}</StoreProvider>
        </TranslateProvider>
      </LocaleProvider>
    </ThemeProvider>
  )
}
