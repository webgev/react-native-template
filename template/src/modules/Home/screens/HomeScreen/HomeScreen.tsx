import React from 'react';

import { Icons } from '~/assets';
import { Layout } from '~/components/Layout';
import { Button, Text } from '~/components/UI';
import { useTranslate } from '~/lib';
import { ConfigSelectButton } from '~/lib/config';
import { Routes, Screen, useNavigationOptions } from '~/navigation';
import { useNavigation } from '~/navigation/hooks';

import strings from './HomeScreen.i18n.json';

export interface HomeScreenProps {}

export const HomeScreen: Screen<Routes.Home> = () => {
  const { t } = useTranslate();

  const { goToHomeInner } = useNavigation();

  useNavigationOptions({ title: t(strings.title) });

  return (
    <Layout center>
      <ConfigSelectButton>
        <Icons.Logo />
      </ConfigSelectButton>

      <Text>{t(strings.title)}</Text>
      <Button onPress={goToHomeInner}>Inner screen</Button>
    </Layout>
  );
};
