import { Flex, IFlexProps, useTheme } from 'native-base'
import React from 'react'

interface Props extends IFlexProps {
  hasPaddingHorizontal?: boolean
  center?: boolean
}

export const Layout = ({ center, ...props }: Props) => {
  const theme = useTheme()
  return (
    <Flex
      align={center ? 'center' : undefined}
      backgroundColor={theme.colors.backgroundColor}
      flex={1}
      justify={center ? 'center' : undefined}
      {...props}
    />
  )
}
