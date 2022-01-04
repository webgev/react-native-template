import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { useStore } from '~/lib/store'
import { LoginScreen } from '~/modules/Auth'
import { Routes } from '~/navigation'

import { TabBar } from './TabBar'

const Stack = createStackNavigator()

export const Navigation = () => {
  const { isAuth } = useStore()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuth ? Routes.Tabs : Routes.Login} mode="modal">
        {!isAuth && (
          <Stack.Screen
            component={LoginScreen}
            name={Routes.Login}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        )}

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
