import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { HomeScreen, InnerScreen } from '~/modules/Home'

import { Routes } from './routes'

const Stack = createNativeStackNavigator()

export const HomeScreens = [
  { screen: HomeScreen, name: Routes.Home },
  { screen: InnerScreen, name: Routes.HomeInner },
].map(({ screen, name }) => (
  <Stack.Screen component={screen} key={name} name={name} options={{ ...screen?.options?.() }} />
))
