import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { SvgProps } from 'react-native-svg'

import { Icons } from '~/assets'
import { useTranslate } from '~/lib'
import { s } from '~/lib/size'
import { useTheme } from '~/lib/theme'
import { Routes } from '~/navigation'
import { HomeScreens } from '~/navigation/stacks'

import strings from './TabBar.i18n.json'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const HomeStack = () => <Stack.Navigator>{HomeScreens}</Stack.Navigator>
const InnerStack = () => (
  <Stack.Navigator initialRouteName={Routes.HomeInner}>{HomeScreens}</Stack.Navigator>
)

export const TabBar = () => {
  const { t } = useTranslate()

  const { colors, getColor } = useTheme()

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
  )
}

function tabBarIcon(Normal: React.FC<SvgProps>, Focused: React.FC<SvgProps>) {
  return (props: { focused: boolean; color: string }) => {
    if (props.focused) {
      return <Focused color={props.color} height={s(24)} width={s(24)} />
    } else {
      return <Normal color={props.color} height={s(24)} width={s(24)} />
    }
  }
}
