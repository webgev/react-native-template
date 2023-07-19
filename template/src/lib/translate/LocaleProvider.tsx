import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  PropsWithChildren,
} from 'react';

import { Logger } from '../logger';

import { Locale } from './locale';
import { getLocale, setPersistLocale } from './localeService';

type LocaleType = [Locale, (locale: Locale) => void];

const LocaleContext = React.createContext<LocaleType>([
  Locale.En,
  nextLocale =>
    Logger.warn(
      `LocaleContext not initialized yet, skip setting ${nextLocale}`,
    ),
]);

export const LocaleProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [init, setInit] = useState(false);
  const [locale, setLocale] = useState(Locale.En);

  const updateLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    setPersistLocale(newLocale);
  }, []);

  const state = useMemo<LocaleType>(
    () => [locale, updateLocale],
    [locale, updateLocale],
  );

  useEffect(() => {
    getLocale()
      .then(newLocale => {
        setLocale(newLocale);
        setInit(true);
      })
      .catch(() => {
        setInit(true);
      });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <LocaleContext.Provider value={state}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => React.useContext(LocaleContext);
