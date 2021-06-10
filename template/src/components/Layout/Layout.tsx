import React from 'react'

import { Flex, BoxProps } from '../primitives'

interface Props extends BoxProps {
  children?: React.ReactNode
}

export const Layout = (props: Props) => {
  return <Flex backgroundColor="white" {...props} />
}
