import { Dimensions, Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

export const isIos = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
export const isTablet =
  DeviceInfo.isTablet() || (Platform.OS === 'ios' && Platform.isPad)

export function isIphoneX() {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  )
}
