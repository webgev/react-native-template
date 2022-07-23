import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RnLocale from 'react-native-localize';

import { Locale } from './locale';
import { deviceLocaleFormat } from './utils';

const LOCALE = 'locale';

const getPersistLocale = async () => {
  try {
    return await AsyncStorage.getItem(LOCALE);
  } catch (error) {
    return null;
  }
};

const getDeviceLocale = () =>
  deviceLocaleFormat(RnLocale.getCountry().toLowerCase());

export const getLocale = async (): Promise<Locale> => {
  const persistLocale = (await getPersistLocale()) as Locale | null;
  const deviceLocale = getDeviceLocale();
  if (persistLocale === null) {
    return deviceLocale;
  }

  return persistLocale;
};

export const setPersistLocale = async (locale: Locale) =>
  AsyncStorage.setItem(LOCALE, locale);
