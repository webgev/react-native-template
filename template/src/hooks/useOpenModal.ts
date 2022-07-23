import { useState, useMemo } from 'react';

export const useOpenModal = (initialValue = false) => {
  const [isVisible, setIsVisible] = useState(initialValue);

  return useMemo(
    () => ({
      isVisible,
      onClose: () => setIsVisible(false),
      onOpen: () => setIsVisible(true),
    }),
    [isVisible],
  );
};
