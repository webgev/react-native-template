import React from 'react'

import { Span } from '~/components'
import { HeaderTitle, Layout } from '~/components/Layout'
import { useTranslate } from '~/lib'
import { Routes, Screen } from '~/navigation'

import strings from './InnerScreen.i18n.json'

export type InnerScreenProps = undefined

export const InnerScreen: Screen<Routes.HomeInner> = () => {
  const { t } = useTranslate()

  return (
    <Layout center>
      <Span>{t(strings.title)}</Span>
    </Layout>
  )
}

InnerScreen.options = () => ({
  headerTitle: () => <HeaderTitle descriptor={strings.title} />,
})
