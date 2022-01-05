import { Button, Text } from 'native-base'
import React from 'react'

import { Layout } from '~/components'
import { Routes, Screen } from '~/navigation'

export interface LoginScreenProps {}

export const LoginScreen: Screen<Routes.Login> = ({ navigation }) => {
  return (
    <Layout center>
      <Text>Login</Text>
      <Button onPress={() => navigation.replace(Routes.Tabs)}>Home</Button>
    </Layout>
  )
}
