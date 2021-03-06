import React, { createContext, PropsWithChildren, useContext } from 'react';

import FlashMessage, { showMessage } from 'react-native-flash-message';

interface State {}

interface Actions {
  showMessage: typeof showMessage;
  error: (error: unknown, defaultMessage?: string) => void;
}

const Context = createContext<State & Actions>(null as never);

export const useNotify = () => useContext(Context);

export const NotifyProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const store = {
    showMessage,
    error: (error: unknown, defaultMessage?: string) => {
      showMessage({
        message:
          (error as { message: string })?.message || defaultMessage || '',
        type: 'danger',
      });
    },
  };

  return (
    <Context.Provider value={store}>
      <FlashMessage position="top" />
      {children}
    </Context.Provider>
  );
};
