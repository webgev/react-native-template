import { NativeBaseProvider } from 'native-base'
import React from 'react'

import { LocaleProvider, TranslateProvider } from '~/lib'
import { ClientProvider } from '~/lib/client'
import { NotifyProvider } from '~/lib/notify'
import { StoreProvider } from '~/lib/store'
import { theme } from '~/lib/theme'

export const Providers: React.FC = ({ children }) => {
  return (
    <NativeBaseProvider theme={theme}>
      <LocaleProvider>
        <TranslateProvider>
          <NotifyProvider>
            <ClientProvider>
              <StoreProvider>{children}</StoreProvider>
            </ClientProvider>
          </NotifyProvider>
        </TranslateProvider>
      </LocaleProvider>
    </NativeBaseProvider>
  )
}
