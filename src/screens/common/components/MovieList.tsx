import {FlashList} from '@shopify/flash-list';
import {useEffect, useRef, useState} from 'react';
import usePaginated from '../../../common/hooks/usePaginated';
import Loader from '../../../common/components/Loader';
import {ActivityIndicator} from 'react-native';
import Colors from '../../../common/Colors';
import MovieListCard from './MovieListCard';

interface IProps {
  queryParams: string;
  getApiUrl : (params :string)=>string;
}

const DEFAULT_YEAR = 2012;

function MovieList(props: IProps) {
  const {queryParams, getApiUrl} = props;
  const currYearRef = useRef<number>(DEFAULT_YEAR);
  const [data, setData] = useState<any>([]);
  const [url, setUrl] = useState<string>('');

  const formatResponse = (response: any) => {
    return {
      year: currYearRef.current,
      movieList: response?.results,
    };
  };

  const {loading, error} = usePaginated({
    data,
    setData,
    url,
    formatResponse,
  });

  const onEndReached = () => {
    currYearRef.current--;
    setUrl(
      getApiUrl(
        queryParams + `&primary_release_year=${currYearRef.current}`,
      ),
    );
  };

  useEffect(() => {
    error && onEndReached();
  }, [error]);

  useEffect(() => {
    currYearRef.current = DEFAULT_YEAR;
    setData([]);
    setUrl(
      getApiUrl(
        queryParams + `&primary_release_year=${currYearRef.current}`,
      ),
    );
  }, [queryParams]);

  if ((!data || data.length == 0) && loading) return <Loader />;
  function renderItem({item}) {
    return <MovieListCard title={item.year} movieList={item.movieList} />;
  }
  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      onEndReached={onEndReached}
      estimatedItemSize={3000}
      onEndReachedThreshold={0.5}
      extraData={data}
      ListFooterComponent={() =>
        loading && <ActivityIndicator color={Colors.darkRed} />
      }
    />
  );
}

export default MovieList;
