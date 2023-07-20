import { useMemo } from 'react';

import { StyleSheet } from 'react-native';

import { SizesSheet } from '~/lib/size';
import { ThemeType, useTheme } from '~/lib/theme';
import { StyleType } from '~/lib/theme/types';

export function createStyles<
  S,
  P extends Record<string, string | number | boolean | undefined | null>,
>(
  factory: (
    theme: ThemeType,
    params: P,
  ) => StyleSheet.NamedStyles<S> | StyleType,
) {
  const useStyles = (params: P) => {
    const theme = useTheme();

    return useMemo(() => {
      return SizesSheet.create(factory(theme, params));
      // @ts-ignore
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme, ...Object.values(params)]);
  };

  return useStyles;
}
