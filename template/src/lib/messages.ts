import { useMemo } from 'react';

import { showMessage, MessageOptions } from 'react-native-flash-message';

import { useTheme } from './theme';

export const useMessage = () => {
  const { colors } = useTheme();

  return useMemo(
    () => ({
      info: (option: MessageOptions) =>
        showMessage({
          ...option,
          icon: 'info',
          backgroundColor: colors.info,
        }),
      success: (option: MessageOptions) =>
        showMessage({
          ...option,
          icon: 'success',
          backgroundColor: colors.success,
        }),
      error: (option: MessageOptions) =>
        showMessage({
          ...option,
          icon: 'danger',
          backgroundColor: colors.error,
        }),
      warning: (option: MessageOptions) =>
        showMessage({
          ...option,
          icon: 'warning',
          backgroundColor: colors.warning,
        }),
    }),
    [colors],
  );
};
