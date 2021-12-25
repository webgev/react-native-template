import { NetworkStatus } from '@apollo/client'

export const isApolloLoading = (networkStatus: NetworkStatus) => {
  return [
    NetworkStatus.fetchMore,
    NetworkStatus.loading,
    NetworkStatus.poll,
    NetworkStatus.refetch,
  ].includes(networkStatus)
}
