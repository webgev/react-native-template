/* eslint-disable no-restricted-imports */
import React from 'react';

import { Button as ButtonBase, IButtonProps } from 'native-base';

interface ButtonProps {
  onPress?: IButtonProps['onPress'];
  isDisabled?: boolean;
  isLoadingText?: string;
  isLoading?: boolean;
  rightIcon?: IButtonProps['rightIcon'];
  leftIcon?: IButtonProps['leftIcon'];
  size?: IButtonProps['size'];
  variant?: IButtonProps['variant'];
  colorScheme?: IButtonProps['colorScheme'];
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = props => (
  <ButtonBase {...props} />
);
