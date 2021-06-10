import React from 'react'

import { Span } from '~/components'
import { HeaderTitle, Layout } from '~/components/Layout'
import { useTranslate } from '~/lib'
import { Routes, Screen } from '~/navigation'

import strings from './Home.i18n.json'

export interface HomeScreenProps {}

export const HomeScreen: Screen<Routes.Home> = () => {
  const { t } = useTranslate()

  return (
    <Layout center>
      <Span>{t(strings.title)}</Span>
    </Layout>
  )
}

HomeScreen.options = () => ({
  headerTitle: () => <HeaderTitle descriptor={strings.title} />,
})
