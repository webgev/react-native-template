import React from 'react';

import { StyleProp, Text as TextBase, TextStyle } from 'react-native';

import { TextVariant, createStyles } from '~/lib/theme';

export interface TextProps {
  variant?: TextVariant;
  style?: StyleProp<TextStyle>;
}

export const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  variant = TextVariant.default,
  ...props
}) => {
  const styles = useStyles({ variant });

  return <TextBase {...props} style={[styles.text, props.style]} />;
};

const useStyles = createStyles(
  ({ colors, typography }, { variant }: { variant: TextVariant }) => ({
    text: {
      ...typography[variant],
      color: colors.mainText,
    },
  }),
);
