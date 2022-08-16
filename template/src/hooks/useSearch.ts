import { useCallback } from 'react';

import Fuse from 'fuse.js';

const THRESHOLD = 0.25;

function useSearch<T extends object>(incoming: T[], keys: string[]) {
  const handleSearch = useCallback(
    (text: string) => {
      const fuse = new Fuse(incoming, {
        keys,
        threshold: THRESHOLD,
        shouldSort: true,
      });

      if (!text) {
        return incoming;
      }

      const matches = fuse.search(text);
      const response = matches.map(match => match.item);

      return response;
    },
    [keys, incoming],
  );

  return handleSearch;
}

export default useSearch;
