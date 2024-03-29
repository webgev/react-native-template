import React, { PropsWithChildren } from 'react';

import { Platform, ViewStyle } from 'react-native';
import FlashMessage from 'react-native-flash-message';

import { rem } from '~/lib/size';

export const AppController: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <FlashMessage position="top" style={$contoller} />
    </>
  );
};

const $contoller: ViewStyle = {
  zIndex: 99,
  paddingTop: Platform.OS === 'android' ? rem(30) : undefined,
};
