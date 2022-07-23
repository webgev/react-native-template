import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';

import RNBootSplash from 'react-native-bootsplash';

import { useAsyncEffect } from '~/hooks';
import { delay } from '~/utils';

import { getAuthorizationToken } from '../token';

interface State {
  isAuth: boolean;
}

interface Actions {
  setIsAuth: React.Dispatch<React.SetStateAction<State['isAuth']>>;
}

const StoreContext = createContext<State & Actions>(null as never);

export const useStore = () => useContext(StoreContext);

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useAsyncEffect(async () => {
    const token = await getAuthorizationToken();
    if (!token) {
      // no auth
      setIsAuth(false);
    } else {
      // TODO: add check auth
      setIsAuth(true);
    }
    await delay(100);

    void RNBootSplash.hide();
  }, []);

  const store = useMemo(
    () => ({
      isAuth,
      setIsAuth,
    }),
    [isAuth],
  );

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
