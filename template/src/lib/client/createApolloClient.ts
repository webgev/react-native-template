import {
  ApolloClient as ApolloClientBase,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';

import { Logger } from '../logger';
import { getAuthorizationToken } from '../token';

const getAuthorizationData = async () => {
  const token = await getAuthorizationToken();
  if (!token) return {};
  return { Authorization: token ? `Bearer ${token}` : '' };
};

export const createApolloClient = async (url: string) => {
  const cache = new InMemoryCache();

  await persistCache({
    cache,
    storage: new AsyncStorageWrapper(AsyncStorage),
  });

  const client = new ApolloClientBase({
    link: ApolloLink.from([
      onError(error => {
        error.graphQLErrors?.forEach(err => {
          Logger.warn(err);
        });
      }),
      setContext(async (_, { headers }) => {
        return {
          headers: {
            ...headers,
            ...(await getAuthorizationData()),
          },
        };
      }),
      new HttpLink({
        uri: url,
      }),
    ]),
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });

  return client;
};

export type ApolloClient = AsyncReturnType<typeof createApolloClient>;
