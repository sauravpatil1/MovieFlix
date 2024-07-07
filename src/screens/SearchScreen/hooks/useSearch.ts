import {useState, useEffect, useRef} from 'react';

const useSearch = (url: string, delay = 500) => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setResults(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }, delay);

    return () => clearTimeout(debounceRef.current);
  }, [url, delay]);

  return {
    results,
    loading,
    error,
  };
};

export default useSearch;
