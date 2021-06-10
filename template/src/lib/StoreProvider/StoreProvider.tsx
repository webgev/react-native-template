import React, { createContext, useContext, useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash'

interface State {}

interface Actions {}

const StoreContext = createContext<State & Actions>(null as never)

export const useStore = () => useContext(StoreContext)

export const StoreProvider: React.FC = ({ children }) => {
  useEffect(() => {
    setTimeout(() => RNBootSplash.hide(), 100)
  }, [])

  const store = {}

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
