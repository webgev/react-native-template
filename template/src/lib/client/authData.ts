import EncryptedStorage from 'react-native-encrypted-storage'

const TOKEN_KEY = 'authToken'

export const getAuthorizationData = async () => {
  const token = await EncryptedStorage.getItem(TOKEN_KEY)
  if (!token) return {}
  return { Authorization: token ? `Bearer ${token}` : '' }
}

export const setAuthorizationData = async (token: string) => {
  await EncryptedStorage.setItem(TOKEN_KEY, token ? `${token}` : '')
}
