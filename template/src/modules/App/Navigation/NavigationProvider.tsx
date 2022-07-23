import React, { PropsWithChildren, useState } from 'react';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

export const NavigationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const navigationRef = useNavigationContainerRef();
  const [ready, setReady] = useState(false);

  return (
    <NavigationContainer ref={navigationRef} onReady={() => setReady(true)}>
      {ready ? children : null}
    </NavigationContainer>
  );
};
