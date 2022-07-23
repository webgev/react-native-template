import React, { PropsWithChildren } from 'react';

// eslint-disable-next-line no-restricted-imports
import { NativeBaseProvider } from 'native-base';

import { theme } from '~/lib/theme';

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};
