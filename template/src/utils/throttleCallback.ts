import { throttle } from 'lodash'

type ThrottleCallback = () => void

export const throttleCallback = (callback?: ThrottleCallback) =>
  throttle(() => callback?.(), 300, { trailing: false, leading: true })
