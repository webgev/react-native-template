/* eslint-disable no-restricted-imports */
import { useMemo } from 'react';

import { useTheme as useThemeBase, getColor } from 'native-base';

export const useTheme = () => {
  const theme = useThemeBase();

  return useMemo(
    () => ({
      ...theme,
      getColor: (color: string) => getColor(color, theme.colors, theme),
    }),
    [theme],
  );
};
