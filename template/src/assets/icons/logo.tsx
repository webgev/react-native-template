import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

import { rem } from '~/lib/size';

export const Logo = (props: SvgProps) => (
  <Svg
    color="#000"
    fill="none"
    height={rem(24)}
    viewBox="0 0 24 24"
    width={rem(24)}
    {...props}
  >
    <Path
      d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1.006 1.006 0 1 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      fill="currentColor"
    />
  </Svg>
);
