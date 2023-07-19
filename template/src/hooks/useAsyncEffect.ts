import { DependencyList, useEffect } from 'react';

export const useAsyncEffect = <T>(
  action: () => Promise<T>,
  deps?: DependencyList,
) => {
  useEffect(() => {
    action();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
