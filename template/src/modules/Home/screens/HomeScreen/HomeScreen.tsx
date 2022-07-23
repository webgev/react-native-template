import React from 'react';

import { Icons } from '~/assets';
import { Layout } from '~/components/Layout';
import { Box, Button, Text } from '~/components/UI';
import { useTranslate } from '~/lib';
import { ConfigSelectButton } from '~/lib/config';
import { rem } from '~/lib/size';
import { Routes, Screen, useNavigationOptions } from '~/navigation';

import strings from './Home.i18n.json';

export interface HomeScreenProps {}

export const HomeScreen: Screen<Routes.Home> = ({ navigation }) => {
  const { t } = useTranslate();

  useNavigationOptions({ title: t(strings.title) });

  return (
    <Layout center>
      <Icons.Logo />
      <Text>{t(strings.title)}</Text>
      <Button onPress={() => navigation.push(Routes.HomeInner)}>
        Inner screen
      </Button>
      <ConfigSelectButton>
        <Box p={rem(30)} />
      </ConfigSelectButton>
    </Layout>
  );
};
