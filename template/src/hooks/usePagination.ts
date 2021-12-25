import { useCallback, useMemo } from 'react'
import { QueryResult, NetworkStatus } from '@apollo/client'
import { isApolloLoading } from '~/utils'

import { useApolloLoadingStates } from './useApolloLoadingStates'

type HookArgs<T> = T extends QueryResult<infer _Data, infer Args> ? Args : never
type HookData<T> = T extends QueryResult<infer Data, infer _Args> ? Data : never

export function usePagination<
  Hook extends QueryResult<Data, Args>,
  Args extends { offset?: number | null } = HookArgs<Hook>,
  Data = HookData<Hook>,
>(
  query: QueryResult<Data, Args>,
  getItemsLength: (data: Data) => number,
  hasMore: (data: Data) => boolean,
) {
  const { fetchMore, data, refetch, networkStatus, error } = query

  const onFetchMore = useCallback(async () => {
    if (isApolloLoading(networkStatus)) {
      return
    }

    return fetchMore({
      variables: {
        offset: data ? getItemsLength(data) : 0,
      },
    })
  }, [data, fetchMore, getItemsLength, networkStatus])

  const { refreshing, loadingMore, loading } =
    useApolloLoadingStates(networkStatus)

  return useMemo(
    () => ({
      onFetchMore: onFetchMore,
      onRefresh: refetch,
      isRefreshing: refreshing || networkStatus === NetworkStatus.setVariables,
      isLoadingMore: loadingMore,
      isLoading: loading,
      data: data,
      hasMore: data && hasMore(data),
      error: error,
    }),
    [
      onFetchMore,
      refetch,
      refreshing,
      networkStatus,
      loadingMore,
      loading,
      data,
      hasMore,
      error,
    ],
  )
}
