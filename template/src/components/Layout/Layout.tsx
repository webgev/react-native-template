import React from 'react';

import { View } from 'react-native';

import { createStyles } from '~/lib/theme';

interface Props {
  center?: boolean;
}

export const Layout: React.FC<React.PropsWithChildren<Props>> = ({
  center,
  ...props
}) => {
  const styles = useStyles({ center });

  return <View style={styles.root} {...props} />;
};

interface StyleProps {
  center?: boolean;
}

const useStyles = createStyles((theme, { center }: StyleProps) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: center ? 'center' : undefined,
    justifyContent: center ? 'center' : undefined,
  },
}));
