import React, { useState } from 'react'
import { ApolloProvider as ApolloProviderBase, useApolloClient } from '@apollo/client'

import { createApolloClient, ApolloClient } from './createApolloClient'
import { useAsyncEffect } from '~/hooks'

export const useClient = async () => useApolloClient() as ApolloClient

export const ApolloProvider: React.FC = ({ children }) => {
  const [client, setClient] = useState<ApolloClient>()

  useAsyncEffect(async () => {
    const client = await createApolloClient()
    setClient(client)
  }, [])

  if (!client) return null

  return <ApolloProviderBase client={client}>{children}</ApolloProviderBase>
}
