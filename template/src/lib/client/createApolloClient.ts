import {
  ApolloClient as ApolloClientBase,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { config } from '~/config'
import { offsetLimitPagination } from '~/utils'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist'

export const createApolloClient = async () => {
  const cache = new InMemoryCache({
    typePolicies: {
      GameOfDay: {
        keyFields: ['id'],
      },
      Query: {
        fields: {
          games: {
            keyArgs: false,
            merge: offsetLimitPagination,
          },
        },
      },
    },
  })

  await persistCache({
    cache,
    storage: new AsyncStorageWrapper(AsyncStorage),
  })

  const client = new ApolloClientBase({
    link: ApolloLink.from([
      onError((error) => {
        error.graphQLErrors?.forEach((err) => {
          console.warn(err.message)
        })
      }),
      setContext(async (_, { headers }) => {
        return {
          headers: {
            ...headers,
          },
        }
      }),
      new HttpLink({
        uri: config.API_BASE,
      }),
    ]),
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  })

  return client
}

export type ApolloClient = AsyncReturnType<typeof createApolloClient>
