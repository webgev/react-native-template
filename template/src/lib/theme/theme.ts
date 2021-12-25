import * as size from '~/lib/size'

import { colors } from './colors'
import { buttonStyle } from './componentTheme'

export type ValueOf<T> = T[keyof T]

export const PADDING_HORIZONTAL = size.s(16)

export const theme = {
  colors,
  utils: {
    ...size,
  },
  buttonStyle,
}

export type ThemeType = typeof theme
