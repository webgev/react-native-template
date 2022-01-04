import React, { createContext, useContext, useMemo, useState } from 'react'
import RNBootSplash from 'react-native-bootsplash'

import { useAsyncEffect } from '~/hooks'
import { delay } from '~/utils'

import { getAuthorizationData } from '../client'

interface State {
  isAuth: boolean
}

interface Actions {
  setIsAuth: React.Dispatch<React.SetStateAction<State['isAuth']>>
}

const StoreContext = createContext<State & Actions>(null as never)

export const useStore = () => useContext(StoreContext)

export const StoreProvider: React.FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  useAsyncEffect(async () => {
    const token = await getAuthorizationData()
    if (!token.Authorization) {
      // no auth
      setIsAuth(false)
    } else {
      // check auth
      setIsAuth(true)
    }
    await delay(100)

    RNBootSplash.hide()
  }, [])

  const store = useMemo(
    () => ({
      isAuth,
      setIsAuth,
    }),
    [isAuth],
  )

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
