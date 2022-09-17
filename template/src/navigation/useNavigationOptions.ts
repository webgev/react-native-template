import { useLayoutEffect } from 'react';

import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { useNavigation } from './hooks';

interface Props {
  title?: string;
  options?: Partial<NativeStackNavigationOptions>;
}

export const useNavigationOptions = ({ title, options }: Props) => {
  const {
    navigation: { setOptions },
  } = useNavigation();

  useLayoutEffect(() => {
    setOptions({
      headerTitle: title,
      ...options,
    });
  }, [setOptions, title, options]);
};
