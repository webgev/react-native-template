import { useEffect } from 'react';

import { ApolloError } from '@apollo/client';

import { Logger } from '~/lib/logger';
import { useMessage } from '~/lib/messages';

export const useError = (error?: ApolloError, shownFlatMessage = true) => {
  const messages = useMessage();
  useEffect(() => {
    if (error) {
      if (shownFlatMessage) {
        messages.error({
          message: error.message,
        });
      }
      Logger.error(error);
    }
  }, [error, messages, shownFlatMessage]);
};
