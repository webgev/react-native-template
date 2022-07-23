import { NetworkStatus } from '@apollo/client';

export const useApolloLoadingStates = (status: NetworkStatus) => {
  return {
    refreshing: status === NetworkStatus.refetch,
    loadingMore: status === NetworkStatus.fetchMore,
    loading: status === NetworkStatus.loading,
    setVariables: status === NetworkStatus.setVariables,
  };
};
