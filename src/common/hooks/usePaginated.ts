import {useState, useEffect} from 'react';

const usePaginated = (initialUrl: string, formatResponse?:(response : any)=>any) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState<string>(initialUrl);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      setData(prev => {
        if(formatResponse){
          return [...prev, formatResponse(result)]
        }
        return [...prev, result];
      });
      setError(null);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {data, loading, error, setUrl};
};

export default usePaginated;
