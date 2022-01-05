import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { s } from 'react-native-size-matters'
import { SvgProps } from 'react-native-svg'
import { WebgevApp } from 'webgev-app'

import { Icons } from '~/assets'
import { useStore } from '~/lib/store'
import { useTheme } from '~/lib/theme'
import { useTranslate } from '~/lib/translate'
import { LoginScreen } from '~/modules/Auth'
import { Routes } from '~/navigation'
import { HomeScreens } from '~/navigation/stacks'

import strings from './Navigation.i18n.json'

const Stack = createNativeStackNavigator()

const HomeStack = () => <Stack.Navigator>{HomeScreens}</Stack.Navigator>
const InnerStack = () => (
  <Stack.Navigator initialRouteName={Routes.HomeInner}>{HomeScreens}</Stack.Navigator>
)

export const Navigation = () => {
  const { isAuth } = useStore()
  const { colors, getColor } = useTheme()
  const { t } = useTranslate()

  return (
    <WebgevApp.Navigation
      navigatorProps={{ initialRouteName: isAuth ? Routes.Tabs : Routes.Login, mode: 'modal' }}
      routes={[{ name: Routes.Login, screen: LoginScreen }]}
      tab={{
        screenOptions: {
          tabBarActiveTintColor: getColor(colors.lightBlue[500]),
          tabBarInactiveTintColor: getColor(colors.gray[400]),
        },
        name: Routes.Tabs,
        tabs: [
          {
            name: Routes.HomeStack,
            label: t(strings.tabsHome),
            screen: HomeStack,
            options: { headerShown: false, tabBarIcon: tabBarIcon(Icons.Logo, Icons.Logo) },
          },
          {
            name: Routes.InnerStack,
            label: t(strings.tabsInner),
            screen: InnerStack,
            options: { headerShown: false, tabBarIcon: tabBarIcon(Icons.Logo, Icons.Logo) },
          },
        ],
      }}
    />
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
