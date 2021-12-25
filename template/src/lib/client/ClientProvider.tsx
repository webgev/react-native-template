import { ApolloProvider, useApolloClient } from '@apollo/client'
import React, { useState } from 'react'

import { useAsyncEffect } from '~/hooks'

import { createApolloClient, ApolloClient } from './createApolloClient'

export const useClient = async () => useApolloClient() as ApolloClient

export const ClientProvider: React.FC = ({ children }) => {
  const [client, setClient] = useState<ApolloClient>()

  useAsyncEffect(async () => {
    const client = await createApolloClient()
    setClient(client)
  }, [])

  if (!client) return null

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
