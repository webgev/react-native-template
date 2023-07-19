import { ForwardedRef, useEffect, useRef } from 'react';

/** allows to use forwarded ref inside forwardRef component */
export const useForwardRef = <T>(ref: ForwardedRef<T | null>) => {
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    if (!ref) {
      return;
    }

    if (typeof ref === 'function') {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
};
