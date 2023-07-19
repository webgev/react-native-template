import React from 'react';

import { Text as TextBase } from 'native-base';

import { TextVariant } from '~/lib/theme';

export interface TextProps {
  variant?: TextVariant;
}

export const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  variant = TextVariant.default,
  ...props
}) => <TextBase variant={variant} {...props} />;
