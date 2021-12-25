import { useEffect } from 'react'
import { AppState, AppStateEvent, AppStateStatus } from 'react-native'

export function useAppStateListener(event: AppStateEvent, effect: (state: AppStateStatus) => void) {
  useEffect(() => {
    AppState.addEventListener(event, (state) => {
      if (state === 'active') {
        effect(state)
      }
    })
    return () => AppState.removeEventListener(event, () => {})
  }, [])
}
