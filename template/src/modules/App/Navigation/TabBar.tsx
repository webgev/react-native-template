import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SvgProps } from 'react-native-svg';

import { Icons } from '~/assets';
import { useTranslate } from '~/lib';
import { rem } from '~/lib/size';
import { useTheme } from '~/lib/theme';
import { Routes } from '~/navigation';
import { HomeScreens } from '~/navigation/stacks';

import strings from './TabBar.i18n.json';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => <Stack.Navigator>{HomeScreens}</Stack.Navigator>;
const InnerStack = () => (
  <Stack.Navigator initialRouteName={Routes.HomeInner}>
    {HomeScreens}
  </Stack.Navigator>
);

export const TabBar = () => {
  const { t } = useTranslate();

  const { colors, getColor } = useTheme();

  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={{
        tabBarActiveTintColor: getColor(colors.lightBlue[500]),
        tabBarInactiveTintColor: getColor(colors.gray[400]),
      }}
    >
      <Tab.Screen
        component={HomeStack}
        name={Routes.HomeStack}
        options={{
          tabBarIcon: tabBarIcon(Icons.Logo, Icons.Logo),
          tabBarLabel: t(strings.tabsHome),
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={InnerStack}
        name={Routes.InnerStack}
        options={{
          tabBarIcon: tabBarIcon(Icons.Logo, Icons.Logo),
          tabBarLabel: t(strings.tabsInner),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

function tabBarIcon(Normal: React.FC<SvgProps>, Focused: React.FC<SvgProps>) {
  return ({ focused, color }: { focused: boolean; color: string }) => {
    if (focused) {
      return <Focused color={color} height={rem(24)} width={rem(24)} />;
    }
    return <Normal color={color} height={rem(24)} width={rem(24)} />;
  };
}
