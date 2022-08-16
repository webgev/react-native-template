import React, { PropsWithChildren, useState } from 'react';

import { ApolloProvider, useApolloClient } from '@apollo/client';

import { useAsyncEffect } from '~/hooks';

import { useConfig } from '../config';
import { useLocale } from '../translate';

import { createApolloClient, ApolloClient } from './createApolloClient';

export const useClient = async () => useApolloClient() as ApolloClient;

export const ClientProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [client, setClient] = useState<ApolloClient>();
  const { config } = useConfig();
  const [locale] = useLocale();

  useAsyncEffect(async () => {
    const client = await createApolloClient(config.API_BASE, locale);
    setClient(client);
  }, [config.API_BASE]);

  if (!client) return null;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
