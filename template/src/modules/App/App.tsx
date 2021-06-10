import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { Routes } from '~/navigation'

import { HomeScreen } from '../Home'

const Stack = createStackNavigator()

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen component={HomeScreen} name={Routes.Home} />
    </Stack.Navigator>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={RootStack} name={Routes.Root} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
