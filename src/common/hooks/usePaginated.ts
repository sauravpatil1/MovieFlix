import {useState, useEffect} from 'react';

interface IPaginateParams {
  url: string;
  data: any[];
  setData: (data: any) => any;
  formatResponse?: (response: any) => any;
}

const usePaginated = ({
  url,
  data,
  setData,
  formatResponse,
}: IPaginateParams) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      setData(prev => {
        if (formatResponse) {
          return [...prev, formatResponse(result)];
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

  return {data, loading, error};
};

export default usePaginated;
