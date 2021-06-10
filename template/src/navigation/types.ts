import { StackScreenProps } from '@react-navigation/stack'
import {
  StackHeaderOptions,
  StackNavigationOptions,
} from '@react-navigation/stack/lib/typescript/src/types'
import React from 'react'

import { Routes } from './routes'
import { ScreensProps } from './screensProps'

export type Screen<RouteName extends Routes> = React.FC<
  StackScreenProps<ScreensProps, RouteName>
> & {
  options?: (
    props?: StackScreenProps<ScreensProps, RouteName>,
  ) => StackHeaderOptions & StackNavigationOptions
}
