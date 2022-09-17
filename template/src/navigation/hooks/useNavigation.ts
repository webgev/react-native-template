/* eslint-disable no-restricted-imports */
import { useMemo } from 'react';

import { useNavigation as useUntypedNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Navigate } from '../navigate';
import { Routes } from '../routes';
import { ScreensProps } from '../screensProps';

export const useNavigation = () => {
  const navigation =
    useUntypedNavigation<NativeStackNavigationProp<ScreensProps, Routes>>();

  const navigate = useMemo(() => new Navigate(navigation), [navigation]);

  return navigate;
};
