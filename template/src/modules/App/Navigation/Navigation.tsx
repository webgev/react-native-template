import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { Routes } from '~/navigation'

import { TabBar } from './TabBar'

const Stack = createStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen
          component={TabBar}
          name={Routes.Tabs}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
