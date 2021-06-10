import React from 'react'

import { PADDING_HORIZONTAL } from '~/constants'

import { Box, BoxProps } from '../primitives'

interface Props extends BoxProps {
  children?: React.ReactNode
}

export const Content = (props: Props) => {
  return <Box paddingX={PADDING_HORIZONTAL} {...props} />
}
