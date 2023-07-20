import { ColorsScheme, darkColors, lightColors } from './colors';
import { typography } from './typography';

export const theme = {
  typography,
  config: {
    initialColorMode: 'light',
  },
  colors: {
    modes: {
      light: lightColors,
      dark: darkColors,
    },
  },
};

// 2. Get the type of the CustomTheme
export type CustomThemeType = Omit<typeof theme, 'colors'> & {
  colors: ColorsScheme;
};
