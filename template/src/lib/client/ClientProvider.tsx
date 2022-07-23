import React, { PropsWithChildren, useState } from 'react';

import { ApolloProvider, useApolloClient } from '@apollo/client';

import { useAsyncEffect } from '~/hooks';

import { useConfig } from '../config';

import { createApolloClient, ApolloClient } from './createApolloClient';

export const useClient = async () => useApolloClient() as ApolloClient;

export const ClientProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [client, setClient] = useState<ApolloClient>();
  const { config } = useConfig();

  useAsyncEffect(async () => {
    const client = await createApolloClient(config.API_BASE);
    setClient(client);
  }, [config.API_BASE]);

  if (!client) return null;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
