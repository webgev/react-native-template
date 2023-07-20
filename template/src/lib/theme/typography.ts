import { TextStyle } from 'react-native';

import { rem } from '../size';

export enum TextVariant {
  default = 'default',
  h1 = 'h1',
}

export const typography: Record<TextVariant, TextStyle> = {
  [TextVariant.h1]: {
    fontSize: rem(24),
  },
  [TextVariant.default]: {
    fontSize: rem(14),
  },
};
