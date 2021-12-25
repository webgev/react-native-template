import { Button, Input, Text } from 'native-base'
import React from 'react'

import { Icons } from '~/assets'
import { Layout } from '~/components'
import { useTranslate } from '~/lib'
import { Routes, Screen, useNavigationOptions } from '~/navigation'

import strings from './Home.i18n.json'

export interface HomeScreenProps {}

export const HomeScreen: Screen<Routes.Home> = ({ navigation }) => {
  const { t } = useTranslate()

  useNavigationOptions({ title: strings.title })

  return (
    <Layout center>
      <Icons.Logo />
      <Text>{t(strings.title)}</Text>
      <Button onPress={() => navigation.push(Routes.HomeInner)}>Inner screen</Button>

      <Input isFullWidth placeholder="ASD" variant="unstyled" />
    </Layout>
  )
}
