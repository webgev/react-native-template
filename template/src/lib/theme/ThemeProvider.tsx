import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Appearance } from 'react-native';

import { CustomThemeType, theme } from './theme';
import { ColorScheme } from './types';

export interface ThemeType extends CustomThemeType {
  colorScheme: ColorScheme;
  setColorScheme: React.Dispatch<React.SetStateAction<ColorScheme>>;
  toggleColorMode: () => void;
}

export const ThemeProviderContext = createContext<ThemeType>(null as never);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    Appearance.getColorScheme() ?? 'light',
  );

  const currentTheme: CustomThemeType = useMemo(
    () => ({
      ...theme,
      colors: theme.colors.modes[colorScheme],
    }),
    [colorScheme],
  );
  const toggleColorMode = useCallback(() => {
    setColorScheme(v => (v === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    Appearance.setColorScheme(colorScheme);
  }, [colorScheme]);

  return (
    <ThemeProviderContext.Provider
      value={{ ...currentTheme, colorScheme, setColorScheme, toggleColorMode }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
};
