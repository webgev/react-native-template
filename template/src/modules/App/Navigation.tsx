import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { Routes } from '~/navigation'

import { HomeScreen, InnerScreen } from '../Home'

const Stack = createStackNavigator()

export const Screens = [
  { screen: HomeScreen, name: Routes.Home },
  { screen: InnerScreen, name: Routes.HomeInner },
].map(({ screen, name }) => (
  <Stack.Screen component={screen} key={name} name={name} options={{ ...screen?.options?.() }} />
))

const RootStack: React.FC = () => {
  return <Stack.Navigator initialRouteName={Routes.Home}>{Screens}</Stack.Navigator>
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen component={RootStack} name={Routes.Root} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
