/* eslint-disable no-restricted-imports */
import {
  setDefaultWidth,
  rem as baseRem,
  vw as baseVw,
  vh as baseVh,
  SizesSheet as BaseSizesSheet,
} from '@webgev/react-native-size';
import { Dimensions, Insets } from 'react-native';

import { isTablet } from '~/utils';

// figma design with
setDefaultWidth(375);

if (isTablet) {
  setDefaultWidth(Dimensions.get('window').width - 320);
}

export const entireScreenWidth = Dimensions.get('window').width;
export const entireScreenHeight = Dimensions.get('window').height;

export const rem = baseRem;
export const vh = baseVh;
export const vw = baseVw;
export const SizesSheet = BaseSizesSheet;

export const hitSlop = (value = 20): Insets => ({
  top: rem(value),
  left: rem(value),
  right: rem(value),
  bottom: rem(value),
});
