import { useCallback, useEffect } from 'react'
import { AppState, AppStateEvent, AppStateStatus } from 'react-native'

export function useAppStateListener(event: AppStateEvent, effect: (state: AppStateStatus) => void) {
  const onState = useCallback(
    (state: AppStateStatus) => {
      effect(state)
    },
    [effect],
  )

  useEffect(() => {
    AppState.addEventListener(event, onState)
    return () => AppState.removeEventListener(event, onState)
  }, [event, onState])
}
