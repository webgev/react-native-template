import React from 'react'

import { Navigation } from './Navigation'
import { Providers } from './Providers'

export const App = () => {
  return (
    <Providers>
      <Navigation />
    </Providers>
  )
}
