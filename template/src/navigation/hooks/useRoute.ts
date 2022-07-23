// eslint-disable-next-line no-restricted-imports
import { useRoute as useRouteBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Routes } from '../routes';
import { ScreensProps } from '../screensProps';

type RouteProp<RouteName extends Routes> = NativeStackScreenProps<
  ScreensProps,
  RouteName
>['route'];

export const useRoute = <RouteName extends Routes>() => {
  return useRouteBase<RouteProp<RouteName>>();
};
