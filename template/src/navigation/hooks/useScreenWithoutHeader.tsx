import { useLayoutEffect } from 'react';

import { useNavigation } from './useNavigation';

export const useScreenWithoutHeader = () => {
  const { navigation } = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
};
