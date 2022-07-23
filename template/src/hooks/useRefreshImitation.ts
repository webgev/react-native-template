import { useCallback, useMemo, useState } from 'react';

export const useRefreshImitation = (
  refreshing?: boolean,
  onRefreshing?: () => unknown,
) => {
  const [refreshImitation, setRefreshImitation] = useState(false);

  const onRefreshImitation = useCallback(() => {
    onRefreshing?.();
    setRefreshImitation(true);
    setTimeout(() => setRefreshImitation(false), 1000);
  }, [onRefreshing]);

  return useMemo(
    () => ({
      onRefreshImitation,
      refreshingImitation: refreshing || refreshImitation,
    }),
    [onRefreshImitation, refreshImitation, refreshing],
  );
};
