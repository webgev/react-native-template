import { s, vs, ms, mvs } from 'react-native-size-matters'

export * from 'react-native-size-matters'

export const spx = (size: number) => {
  return `${s(size)}px`
}
export const vspx = (size: number) => {
  return `${vs(size)}px`
}

export const mspx = (size: number) => {
  return `${ms(size)}px`
}

export const mvspx = (size: number) => {
  return `${mvs(size)}px`
}
