import React from 'react'

import { Span, Flex } from '~/components'
import { Routes, Screen } from '~/navigation'

export interface HomeScreenProps {}

export const HomeScreen: Screen<Routes.Home> = () => {
  return (
    <Flex center>
      <Span>HomePage</Span>
    </Flex>
  )
}
