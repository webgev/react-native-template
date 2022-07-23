import { defaultSecureStore } from './secureStore';

const TOKEN_KEY = '@authToken';

export const getAuthorizationToken = async (): Promise<string | null> => {
  const token = await defaultSecureStore.getItem(TOKEN_KEY);
  return token;
};

export const setAuthorizationToken = async (token: string) => {
  await defaultSecureStore.setItem(TOKEN_KEY, token ? `${token}` : '');
};
