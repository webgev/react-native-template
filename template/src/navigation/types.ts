import React from 'react';

import {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { Routes } from './routes';
import { ScreensProps } from './screensProps';

export type Screen<RouteName extends Routes> = React.FC<
  NativeStackScreenProps<ScreensProps, RouteName>
> & {
  options?: (
    props?: NativeStackScreenProps<ScreensProps, RouteName>,
  ) => NativeStackNavigationOptions;
};
