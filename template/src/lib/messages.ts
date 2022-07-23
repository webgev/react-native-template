import { showMessage, MessageOptions } from 'react-native-flash-message';

import { theme } from './theme';

export const messages = {
  info: async (option: MessageOptions) => {
    await showMessage({
      ...option,
      icon: 'info',
      backgroundColor: theme.colors.info,
    });
  },
  success: async (option: MessageOptions) => {
    await showMessage({
      ...option,
      icon: 'info',
      backgroundColor: theme.colors.success,
    });
  },
  error: async (option: MessageOptions) => {
    await showMessage({
      ...option,
      icon: 'info',
      backgroundColor: theme.colors.error,
    });
  },
  warning: async (option: MessageOptions) => {
    await showMessage({
      ...option,
      icon: 'info',
      backgroundColor: theme.colors.warning,
    });
  },
};
