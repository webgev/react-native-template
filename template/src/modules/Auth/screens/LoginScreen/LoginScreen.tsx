import React from 'react';

import { Layout } from '~/components/Layout';
import { Text } from '~/components/UI';
import { Routes, Screen } from '~/navigation';

export type LoginScreenProps = undefined;

export const LoginScreen: Screen<Routes.Login> = () => {
  return (
    <Layout center>
      <Text>Login</Text>
    </Layout>
  );
};
