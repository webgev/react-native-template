import { HomeScreenProps } from '~/modules/Home'

import { Routes } from './routes'

export interface ScreensProps extends Record<string, object | undefined> {
  [Routes.Home]: HomeScreenProps
}
