import React from 'react';
import { Routes, Screen } from '~/navigation';
import { HomeScreen, InnerScreen } from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const screens = [
  { screen: HomeScreen, name: Routes.Home },
  { screen: InnerScreen, name: Routes.HomeInner },
];

const HomeScreens = screens.map(({ screen, name }) => (
  <Stack.Screen
    component={screen as Screen<typeof name>}
    key={name}
    name={name}
    options={{ ...screen?.options?.() }}
  />
));

export const HomeStack = () => <Stack.Navigator>{HomeScreens}</Stack.Navigator>;
