import DeviceInfo from 'react-native-device-info'

// Gets the device unique ID
export const DEVICE_ID = DeviceInfo.getUniqueId()

export const SYSTEM_VERSION = DeviceInfo.getSystemVersion()
