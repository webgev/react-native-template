/* eslint-disable no-restricted-imports */
import { useNavigation as useUntypedNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Routes } from '../routes';
import { ScreensProps } from '../screensProps';

export const useNavigation = () => {
  return useUntypedNavigation<
    NativeStackNavigationProp<ScreensProps, Routes>
  >();
};
