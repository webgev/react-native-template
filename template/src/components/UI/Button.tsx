import React, { ReactNode } from 'react';

import { TouchableOpacity } from 'react-native';

import { Text } from './Text';

interface ButtonProps {
  isDisabled?: boolean;
  isLoadingText?: string;
  isLoading?: boolean;
  children?: ReactNode | string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  if (typeof children === 'string') {
    children = <Text>children</Text>;
  }

  return <TouchableOpacity {...props} children={children} />;
};
