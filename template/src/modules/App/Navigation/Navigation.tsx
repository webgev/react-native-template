import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useStore } from '~/lib/store';
import { LoginScreen } from '~/modules/Auth';
import { Routes } from '~/navigation';

import { TabBar } from './TabBar';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const { isAuth } = useStore();
  return (
    <Stack.Navigator initialRouteName={Routes.Tabs}>
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
  );
};
