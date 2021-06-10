import { Locale as AppLocale } from './locale'

export const deviceLocaleFormat = (locale: string) => {
  if (locale !== 'ru') {
    return 'en' as AppLocale
  }

  return locale as AppLocale
}
