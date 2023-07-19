import React, { PropsWithChildren } from 'react';

import { NativeBaseProvider } from 'native-base';

import { theme } from '~/lib/theme';

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};
