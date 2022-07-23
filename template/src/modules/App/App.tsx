import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Compose } from '~/components/Compose';
import { LocaleProvider, TranslateProvider } from '~/lib';
import { ClientProvider } from '~/lib/client';
import { ConfigProvider } from '~/lib/config';
import { loggerWrap } from '~/lib/logger';
import { NotifyProvider } from '~/lib/notify';
import { StoreProvider } from '~/lib/store';
import { ThemeProvider } from '~/lib/theme';

import { AppController } from './AppController';
import { Navigation } from './Navigation';
import { NavigationProvider } from './Navigation/NavigationProvider';

export const App = loggerWrap(() => {
  return (
    <Compose
      components={[
        SafeAreaProvider,
        ConfigProvider,
        ThemeProvider,
        LocaleProvider,
        TranslateProvider,
        NotifyProvider,
        ClientProvider,
        StoreProvider,
        NavigationProvider,
      ]}
    >
      <AppController>
        <Navigation />
      </AppController>
    </Compose>
  );
});
