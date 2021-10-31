import React from 'react'

import { s } from '~/lib/size'

import { Box, BoxProps } from './Primitives'

interface Props extends BoxProps {
  spacer: 4 | 6 | 8 | 12 | 16 | 20 | 24 | 32
  row?: boolean
}

export const Grid: React.FC<Props> = ({ children, spacer, row, ...rest }) => {
  const count = React.Children.count(children)
  return (
    <Box flexDirection={row ? 'row' : 'column'} {...rest}>
      {React.Children.map(children, (child, index) =>
        child ? (
          <>
            {child}
            {index !== count - 1 && <Box mb={!row ? s(spacer) : 0} mr={row ? s(spacer) : 0} />}
          </>
        ) : null,
      )}
    </Box>
  )
}
