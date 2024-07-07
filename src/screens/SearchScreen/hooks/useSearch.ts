/**
 * This hook provide debounce search text which can be used to optimize api calls.
 */

import {useEffect, useRef, useState} from 'react';

function useSearch() {
  const [searchText, setSearchText] = useState<string>('');
  const [debouncedSearchText, setDebouncedSearchText] =
    useState<string>(searchText);

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 300);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [searchText]);
  return {
    searchText,
    setSearchText,
    debouncedSearchText,
  };
}

export default useSearch;
