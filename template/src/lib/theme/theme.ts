/* eslint-disable no-restricted-imports */
import { extendTheme } from 'native-base';

import { rem } from '../size';

// customizing Fonts - https://docs.nativebase.io/customizing-fonts

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: rem(22),
      },
    },
  },
  colors: {
    transparent: 'transparent',
    backgroundColor: 'white',
    headerBackgroundColor: 'blue.400',
    headerTitle: 'white',
    success: '#26b23a',
    error: '#d54743',
    info: '#3374F9',
    warning: '#FC7C12',
  },
});

// 2. Get the type of the CustomTheme
type CustomThemeType = typeof theme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
