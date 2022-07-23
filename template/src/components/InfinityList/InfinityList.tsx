import React, { forwardRef, memo, useCallback } from 'react';

import { useScrollToTop } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  RefreshControl,
} from 'react-native';

import { useForwardRef, useRefreshImitation } from '~/hooks';
import { defaultsScrollProps } from '~/lib/theme';

import { styles } from './styles';

type InfinityListProps<T> = {
  isRefreshing?: boolean;
  isLoadingMore?: boolean;
  onRefresh?: () => void;
  onLoadMore?: () => void;
  hasMore?: boolean;
  header?: React.ComponentType<unknown> | React.ReactElement | null;
  footer?: React.ComponentType<unknown> | React.ReactElement | null;
} & FlatListProps<T>;

export const InfinityList = memo(
  forwardRef(
    <T extends object>(
      {
        isRefreshing,
        isLoadingMore,
        contentContainerStyle,
        data,
        onRefresh,
        style,
        onLoadMore,
        hasMore,
        header,
        footer,
        ...rest
      }: InfinityListProps<T>,
      ref: React.Ref<FlatList<T>>,
    ) => {
      const innerRef = useForwardRef(ref);
      const { refreshingImitation, onRefreshImitation } = useRefreshImitation(
        isRefreshing,
        onRefresh,
      );

      useScrollToTop(innerRef);

      const renderFooter = useCallback(() => {
        if (!isLoadingMore) return <>{footer}</>;

        return (
          <>
            {footer}
            <ActivityIndicator
              size="large"
              style={styles.bottomActivityIndicator}
            />
          </>
        );
      }, [isLoadingMore, footer]);

      const fetchOnLoadMore = useCallback(() => {
        if (!isLoadingMore && onLoadMore && !refreshingImitation) {
          onLoadMore();
        }
      }, [isLoadingMore, onLoadMore, refreshingImitation]);

      return (
        <FlatList
          {...rest}
          {...defaultsScrollProps}
          ListFooterComponent={renderFooter}
          ListHeaderComponent={header}
          contentContainerStyle={[
            !data?.length && styles.contentContainer,
            contentContainerStyle,
          ]}
          data={data}
          ref={innerRef}
          refreshControl={
            <RefreshControl
              refreshing={refreshingImitation}
              onRefresh={onRefreshImitation}
            />
          }
          style={[styles.container, style]}
          onEndReached={hasMore ? fetchOnLoadMore : undefined}
          onEndReachedThreshold={0.4}
        />
      );
    },
  ),
) as <T>(
  props: InfinityListProps<T> & { ref?: React.ForwardedRef<FlatList<T>> },
) => React.ReactElement;
