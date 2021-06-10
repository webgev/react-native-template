import { DefaultTheme } from 'styled-components'

export type ValueOf<T> = T[keyof T]

export const colors = {
  background: '#FFFFFF',
  white: '#FFFFFF',
  card: '#3D4D64',
  orange: '#F15428',
  transparent: 'transparent',
} as const

const space: number[] = []
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]

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
