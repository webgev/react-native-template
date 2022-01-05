import { Screen as ScreenBase } from 'webgev-app'

import { Routes } from './routes'
import { ScreensProps } from './screensProps'

export type Screen<RouteName extends Routes> = ScreenBase<ScreensProps, RouteName>
