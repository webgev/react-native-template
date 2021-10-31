import { DefaultTheme } from 'styled-components'

import { s } from '~/lib/size'

export type ValueOf<T> = T[keyof T]

export const PADDING_HORIZONTAL = s(16)

export const colors = {
  background: '#FFFFFF',
  white: '#FFFFFF',
  card: '#3D4D64',
  orange: '#F15428',
  transparent: 'transparent',
} as const

const space: number[] = []
const fontSizes: number[] = []

export const duration = {
  fast: 200,
  normal: 300,
  slow: 400,
  lazy: 3000,
  default: 600,
} as const

export const theme: DefaultTheme = {
  colors,
  fontSizes,
  space,
  duration,
}
