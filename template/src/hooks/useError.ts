import { useEffect } from 'react';

import { ApolloError } from '@apollo/client';

import { Logger } from '~/lib/logger';
import { messages } from '~/lib/messages';

export const useError = (error?: ApolloError, shownFlatMessage = true) => {
  useEffect(() => {
    if (error) {
      if (shownFlatMessage) {
        void messages.error({
          message: error.message,
        });
      }
      Logger.error(error);
    }
  }, [error, shownFlatMessage]);
};
