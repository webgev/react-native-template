import React, { PropsWithChildren, useCallback } from 'react';

import { formatDuration } from 'date-fns';
import format from 'date-fns/format';
import * as dateLocations from 'date-fns/locale';
import { IntlProvider, useIntl } from 'react-intl';

import commonStrings from './Common.i18n.json';
import { useLocale } from './LocaleProvider';
import { Locale } from './locale';
import en from './translates/en.json';

export type Message = keyof typeof en;

export const TRANSLATION = {
  [Locale.En]: en,
};

export const TranslateProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [locale] = useLocale();
  return (
    <IntlProvider
      defaultLocale={locale}
      locale={locale}
      messages={TRANSLATION[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export interface Descriptor {
  id: string;
  message: string;
}

export const useTranslate = () => {
  const [locale] = useLocale();
  const intl = useIntl();
  const dateLocale = dateLocations[localeToDateLocalization[locale]];

  return {
    t: useCallback(
      (descriptor: Descriptor, values?: Record<string, string | number>) =>
        intl.formatMessage(
          { id: descriptor.id, defaultMessage: descriptor.message },
          values,
        ),
      [intl],
    ),
    format: useCallback(
      (date: number | Date, formatDate: string) =>
        format(date, formatDate, { locale: dateLocale }),
      [dateLocale],
    ),
    formatDuration: useCallback(
      (duration: Duration, formats?: Array<keyof Duration>) =>
        formatDuration(duration, { locale: dateLocale, format: formats }),
      [dateLocale],
    ),
    commonStrings,
  };
};

const localeToDateLocalization: {
  [key in Locale]: keyof typeof dateLocations;
} = {
  [Locale.En]: 'enUS',
};
