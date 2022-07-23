import React, { PropsWithChildren } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ConfigProvider as ConfigProviderBase,
  useConfig as useConfigBase,
} from '@webgev/react-native-config';

import { defaultConfig, standConfig as config, ConfigType } from './config';

export const useConfig = () => useConfigBase<ConfigType>();

export const ConfigProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProviderBase
      AsyncStorage={AsyncStorage}
      commonConfig={defaultConfig}
      defaultStand="production"
      standsConfig={config}
    >
      {children}
    </ConfigProviderBase>
  );
};
