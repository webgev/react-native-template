import React from 'react';

import { Layout } from '~/components/Layout';
import { Text } from '~/components/UI';
import { useTranslate } from '~/lib';
import { Routes, Screen, useNavigationOptions } from '~/navigation';

import strings from './InnerScreen.i18n.json';

export type InnerScreenProps = undefined;

export const InnerScreen: Screen<Routes.HomeInner> = () => {
  const { t } = useTranslate();

  useNavigationOptions({ title: t(strings.title) });

  return (
    <Layout center>
      <Text>{t(strings.title)}</Text>
    </Layout>
  );
};
