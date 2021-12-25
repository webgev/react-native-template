import React from 'react'

import { colors, PADDING_HORIZONTAL } from '~/lib/theme'

import { SafeAreaFlex, Flex, BoxProps } from '../Primitives'

interface Props extends BoxProps {
  children?: React.ReactNode
  hasPaddingHorizontal?: boolean
  hasSafeAreaFlex?: boolean
}

export const Layout = (props: Props) => {
  const Wrapper: React.ComponentType<BoxProps> = props.hasSafeAreaFlex ? SafeAreaFlex : Flex
  return (
    <Wrapper
      backgroundColor={colors.white}
      paddingHorizontal={props.hasPaddingHorizontal ? PADDING_HORIZONTAL : undefined}
      {...props}
    />
  )
}
