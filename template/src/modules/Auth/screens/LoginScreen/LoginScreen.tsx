import { Text } from 'native-base'
import React from 'react'

import { Layout } from '~/components'
import { Routes, Screen } from '~/navigation'

export type LoginScreenProps = undefined

export const LoginScreen: Screen<Routes.Login> = () => {
  return (
    <Layout center>
      <Text>Login</Text>
    </Layout>
  )
}
