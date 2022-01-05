import { ScreensProps as ScreensPropsBase } from 'webgev-app'

import { HomeScreenProps, InnerScreenProps } from '~/modules/Home'

import { Routes } from './routes'

export interface ScreensProps extends ScreensPropsBase {
  [Routes.Home]: HomeScreenProps
  [Routes.HomeInner]: InnerScreenProps
}
