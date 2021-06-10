import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { Routes } from '~/navigation'

import { HomeScreen } from '../Home'
import { Providers } from './Providers'

const Stack = createStackNavigator()

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen
        component={HomeScreen}
        name={Routes.Home}
        options={{ ...HomeScreen.options?.() }}
      />
    </Stack.Navigator>
  )
}

export const App = () => {
  return (
    <Providers>
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          <Stack.Screen component={RootStack} name={Routes.Root} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  )
}
