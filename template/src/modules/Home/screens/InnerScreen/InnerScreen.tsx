import { Text } from 'native-base'
import React from 'react'

import { Layout } from '~/components'
import { useTranslate } from '~/lib/translate'
import { Routes, Screen, useNavigationOptions } from '~/navigation'

import strings from './InnerScreen.i18n.json'

export type InnerScreenProps = undefined

export const InnerScreen: Screen<Routes.HomeInner> = () => {
  const { t } = useTranslate()

  useNavigationOptions({ title: strings.title })

  return (
    <Layout center>
      <Text>{t(strings.title)}</Text>
    </Layout>
  )
}
