import React from 'react'

import { Icons } from '~/assets'
import { Span, Button } from '~/components'
import { HeaderTitle, Layout } from '~/components/Layout'
import { useTranslate } from '~/lib'
import { Routes, Screen } from '~/navigation'

import strings from './Home.i18n.json'

export interface HomeScreenProps {}

export const HomeScreen: Screen<Routes.Home> = ({ navigation }) => {
  const { t } = useTranslate()

  return (
    <Layout center>
      <Icons.Logo />
      <Span>{t(strings.title)}</Span>
      <Button title="Inner screen" onPress={() => navigation.push(Routes.HomeInner)} />
    </Layout>
  )
}

HomeScreen.options = () => ({
  headerTitle: () => <HeaderTitle descriptor={strings.title} />,
})
