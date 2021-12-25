import React from 'react'
import { ThemeProvider } from 'styled-components'

import { LocaleProvider, TranslateProvider } from '~/lib'
import { NotifyProvider } from '~/lib/notify'
import { StoreProvider } from '~/lib/store'
import { theme } from '~/theme'

export const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider>
        <TranslateProvider>
          <NotifyProvider>
            <StoreProvider>{children}</StoreProvider>
          </NotifyProvider>
        </TranslateProvider>
      </LocaleProvider>
    </ThemeProvider>
  )
}
