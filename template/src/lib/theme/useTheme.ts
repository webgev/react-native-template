import { useContext } from 'react';

import { ThemeProviderContext } from './ThemeProvider';

export const useTheme = () => useContext(ThemeProviderContext);
