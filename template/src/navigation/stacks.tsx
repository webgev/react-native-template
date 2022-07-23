import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, InnerScreen } from '~/modules/Home';

import { Routes } from './routes';

const Stack = createNativeStackNavigator();

export interface TabsProps
  extends Record<string, Record<string, unknown> | undefined> {
  [Routes.Tabs]: undefined | { screen: Routes | null };
}

export const HomeScreens = [
  { screen: HomeScreen, name: Routes.Home },
  { screen: InnerScreen, name: Routes.HomeInner },
].map(({ screen, name }) => (
  <Stack.Screen
    component={screen}
    key={name}
    name={name}
    options={{ ...screen?.options?.() }}
  />
));
