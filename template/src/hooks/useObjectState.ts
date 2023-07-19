import { useState, useCallback, useMemo } from 'react';

export const useObjectState = <S>(
  initialState: S,
): [S, <K extends keyof S>(value: Pick<S, K> | S) => void] => {
  const [state, updateState] = useState<S>(initialState);

  const setState = useCallback(<K extends keyof S>(value: Pick<S, K> | S) => {
    updateState(newState => ({
      ...newState,
      ...value,
    }));
  }, []);

  const momoState = useMemo(() => state, [state]);

  return [momoState, setState];
};
