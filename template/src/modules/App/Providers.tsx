import React from 'react'
import { ThemeProvider } from 'styled-components'

import { LocaleProvider, TranslateProvider } from '~/lib'
import { ClientProvider } from '~/lib/client'
import { NotifyProvider } from '~/lib/notify'
import { StoreProvider } from '~/lib/store'
import { theme } from '~/lib/theme'

export const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider>
        <TranslateProvider>
          <NotifyProvider>
            <ClientProvider>
              <StoreProvider>{children}</StoreProvider>
            </ClientProvider>
          </NotifyProvider>
        </TranslateProvider>
      </LocaleProvider>
    </ThemeProvider>
  )
}
