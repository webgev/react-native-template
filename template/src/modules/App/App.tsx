import React from 'react'
import { WebgevApp } from 'webgev-app'

import { LocaleProvider, TranslateProvider } from '~/lib'
import { ClientProvider } from '~/lib/client'
import { NotifyProvider } from '~/lib/notify'
import { StoreProvider } from '~/lib/store'
import { ThemeProvider } from '~/lib/theme'

import { Navigation } from './Navigation'

export const App = () => {
  return (
    <WebgevApp.Providers
      providers={[
        ThemeProvider,
        LocaleProvider,
        TranslateProvider,
        NotifyProvider,
        ClientProvider,
        StoreProvider,
      ]}
    >
      <Navigation />
    </WebgevApp.Providers>
  )
}
