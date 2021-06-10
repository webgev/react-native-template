import { formatDuration } from 'date-fns'
import format from 'date-fns/format'
import * as dateLocations from 'date-fns/locale'
import React, { useCallback } from 'react'
import { IntlProvider, useIntl } from 'react-intl'

import { useLocale } from './LocaleProvider'
import { Locale } from './locale'
import en from './translates/en.json'
import ru from './translates/ru.json'

export type Message = keyof typeof ru & keyof typeof en

export const TRANSLATION = {
  [Locale.En]: en,
}

interface Props {
  children: React.ReactNode
}

export const TranslateProvider = ({ children }: Props) => {
  const [locale] = useLocale()
  return (
    <IntlProvider defaultLocale={locale} locale={locale} messages={TRANSLATION[locale]}>
      {children}
    </IntlProvider>
  )
}

export interface Descriptor {
  id: string
  defaultMessage: string
}

export const useTranslate = () => {
  const [locale] = useLocale()
  const intl = useIntl()
  const dateLocale = dateLocations[localeToDateLocalization[locale]]

  return {
    t: useCallback(
      (descriptor: Descriptor, values?: Record<string, string | number>) => {
        return intl.formatMessage(descriptor, values)
      },
      [intl],
    ),
    format: useCallback(
      (date: number | Date, formatDate: string) => format(date, formatDate, { locale: dateLocale }),
      [dateLocale],
    ),
    formatDuration: useCallback(
      (duration: Duration, formats?: (keyof Duration)[]) =>
        formatDuration(duration, { locale: dateLocale, format: formats }),
      [dateLocale],
    ),
  }
}

const localeToDateLocalization: { [key in Locale]: keyof typeof dateLocations } = {
  [Locale.En]: 'enUS',
}
