import React, { useState, useEffect, useCallback, useMemo } from 'react'

import { Locale } from './locale'
import { getLocale, setPersistLocale } from './localeService'

type LocaleType = [Locale, (locale: Locale) => void]

const LocaleContext = React.createContext<LocaleType>([
  Locale.En,
  (nextLocale) => console.warn(`LocaleContext not initialized yet, skip setting ${nextLocale}`),
])

export const LocaleProvider: React.FC = ({ children }) => {
  const [init, setInit] = useState(false)
  const [locale, setLocale] = useState(Locale.En)

  const updateLocale = useCallback((locale: Locale) => {
    setLocale(locale)
    void setPersistLocale(locale)
  }, [])

  const state = useMemo<LocaleType>(() => [locale, updateLocale], [locale, updateLocale])

  useEffect(() => {
    getLocale()
      .then((locale) => {
        setLocale(locale)
        setInit(true)
      })
      .catch(() => {
        setInit(true)
      })
  }, [])

  if (!init) {
    return null
  }

  return <LocaleContext.Provider value={state}>{children}</LocaleContext.Provider>
}

export const useLocale = () => React.useContext(LocaleContext)
