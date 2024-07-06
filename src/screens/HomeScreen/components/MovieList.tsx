import {FlashList} from '@shopify/flash-list';
import { useEffect, useRef} from 'react';
import MovieListCard from './MovieListCard';
import usePaginated from '../../../common/hooks/usePaginated';
import ApiURL from '../../../ApiURL';
import Loader from '../../../common/components/Loader';
import { ActivityIndicator } from 'react-native';
import Colors from '../../../common/Colors';

function MovieList() {
  const currYearRef = useRef(2012);
  const formatResponse = (response: any) => {
    return {
      year: currYearRef.current,
      movieList: response,
    };
  };
  const {data, loading, error, setUrl} = usePaginated(
    ApiURL.getMovieListUrl(
      `sort_by=popularity.desc&primary_release_year=${currYearRef.current}&page=1&vote_count.gte=100`,
    ),
    formatResponse,
  );

  function renderItem({item}) {
    return (
      <MovieListCard title={item.year} movieList={item.movieList.results} />
    );
  }
  const onEndReached = () => {
    currYearRef.current--;
    setUrl(
      ApiURL.getMovieListUrl(`sort_by=popularity.desc&primary_release_year=${currYearRef.current}&page=1&vote_count.gte=100`,
    ));
  }

  useEffect(()=>{
    error && onEndReached();
  }, [error]);

  if ((!data || data.length == 0) && loading) return <Loader />;
  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      onEndReached={onEndReached}
      estimatedItemSize={3000}
      onEndReachedThreshold={0.5}
      extraData={data}
      ListFooterComponent={()=>loading && <ActivityIndicator color={Colors.darkRed}/>}
    />
  );
}

export default MovieList;
