import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { ImageStyle as FastImageStyle } from 'react-native-fast-image';

export type StyleType = {
  [key: string]: ViewStyle & TextStyle & ImageStyle & FastImageStyle;
};

export type ColorScheme = 'light' | 'dark';
