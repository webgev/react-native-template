import { useEffect } from 'react';

import { useNavigation } from './useNavigation';

/** blocks navigation with possible callback calling instead */
export const useBlockNavigation = (
  callback: (goBack: () => void) => void,
  active = true,
) => {
  const { navigation } = useNavigation();

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        if (!active) {
          return;
        }

        e.preventDefault();

        if (!callback) {
          return;
        }

        callback(() => navigation.dispatch(e.data.action));
      }),
    [navigation, active, callback],
  );
};
