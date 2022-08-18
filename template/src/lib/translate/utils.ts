import { Locale } from 'date-fns';
import { upperFirst } from 'lodash';

import { Locale as AppLocale } from './locale';

export const months = (locale: Locale) =>
  Array.from(Array(12).keys()).map(
    i => upperFirst(locale.localize?.month(i)) ?? '',
  );

export const shortMonthes = (locale: Locale) =>
  months(locale).map(month => month.slice(0, 3));

export const dayNames = (locale: Locale, width: 'short' | 'wide' = 'wide') =>
  [1, 2, 3, 4, 5, 6, 0].map(i => locale.localize?.day(i, { width }) ?? '');

export const dayNamesShort = (locale: Locale) => {
  return dayNames(locale, 'short');
};

const RU_LANGS = ['ru', 'by', 'ua'];

export const deviceLocaleFormat = (locale: string) => {
  if (RU_LANGS.includes(locale.toLowerCase())) {
    return 'ru' as AppLocale;
  }

  return 'en' as AppLocale;
};
