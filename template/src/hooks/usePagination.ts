import { useCallback, useMemo } from 'react';

import { QueryResult } from '@apollo/client';

import { isApolloLoading } from '~/utils';

import { useApolloLoadingStates } from './useApolloLoadingStates';

type HookArgs<T> = T extends QueryResult<unknown, infer Args> ? Args : never;
type HookData<T> = T extends QueryResult<infer Data, unknown> ? Data : never;

export function usePagination<
  Hook extends QueryResult<Data, Args>,
  Args extends { offset?: number | null } = HookArgs<Hook>,
  Data = HookData<Hook>,
>(
  query: QueryResult<Data, Args>,
  getItemsLength: (data: Data) => number,
  hasMore: (data: Data, previousData?: Data) => boolean,
) {
  const { fetchMore, data, refetch, networkStatus, error, previousData } =
    query;

  const onFetchMore = useCallback(async () => {
    if (isApolloLoading(networkStatus)) {
      return;
    }

    return fetchMore({
      variables: {
        offset: data ? getItemsLength(data) : 0,
      },
    });
  }, [data, fetchMore, getItemsLength, networkStatus]);

  const { refreshing, loadingMore, loading, setVariables } =
    useApolloLoadingStates(networkStatus);

  return useMemo(
    () => ({
      onFetchMore,
      onRefresh: refetch,
      isRefreshing: refreshing,
      isLoadingMore: loadingMore,
      isLoading: loading,
      isSetVariables: setVariables,
      data,
      hasMore: data && hasMore(data, previousData),
      error,
    }),
    [
      previousData,
      onFetchMore,
      refetch,
      refreshing,
      loadingMore,
      loading,
      setVariables,
      data,
      hasMore,
      error,
    ],
  );
}
