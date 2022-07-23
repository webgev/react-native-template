import React, { PropsWithChildren } from 'react';

import { ConfigSelectButton as BaseConfigSelectButton } from '@webgev/react-native-config';

interface ConfigSelectButtonProps {
  isEnabled?: boolean;
}

export const ConfigSelectButton: React.FC<
  PropsWithChildren<ConfigSelectButtonProps>
> = ({ isEnabled = true, children }) =>
  isEnabled ? <BaseConfigSelectButton children={children} /> : <>{children}</>;
