import {FlashList} from '@shopify/flash-list';
import {useEffect, useMemo, useRef} from 'react';
import MovieListCard from './MovieListCard';
import usePaginated from '../../../common/hooks/usePaginated';
import ApiURL from '../../../ApiURL';
import Loader from '../../../common/components/Loader';
import {ActivityIndicator} from 'react-native';
import Colors from '../../../common/Colors';
// import data from '../../../apiData';

interface IProps {
  searchText: string;
}

function MovieList(props: IProps) {
  const {searchText} = props;
  const currYearRef = useRef(2012);
  const formatResponse = (response: any) => {
    return {
      year: currYearRef.current,
      movieList: response?.results,
    };
  };
  const {data, loading, error, setUrl} = usePaginated(
    ApiURL.getMovieListUrl(
      `sort_by=popularity.desc&primary_release_year=${currYearRef.current}&page=1&vote_count.gte=100`,
    ),
    formatResponse,
  );

  function renderItem({item}) {
    return <MovieListCard title={item.year} movieList={item.movieList} />;
  }
  const onEndReached = () => {
    currYearRef.current--;
    setUrl(
      ApiURL.getMovieListUrl(
        `sort_by=popularity.desc&primary_release_year=${currYearRef.current}&page=1&vote_count.gte=100`,
      ),
    );
  };

  useEffect(() => {
    error && onEndReached();
  }, [error]);

  const formattedData = useMemo(() => {
    if (!searchText) return data;
    const result: any[] = [];
    data.forEach(dataItem => {
      const movieList = dataItem.movieList;
      const match = [];
      for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].title.includes(searchText)) {
          match.push(movieList[i]);
        }
      }
      if (match.length > 0) {
        result.push({
          year: dataItem.year,
          movieList: match,
        });
      }
    });
    return result;
  }, [searchText, data]);

  if ((!data || data.length == 0) && loading) return <Loader />;
  return (
    <FlashList
      data={formattedData}
      renderItem={renderItem}
      onEndReached={onEndReached}
      estimatedItemSize={3000}
      onEndReachedThreshold={0.5}
      extraData={formattedData}
      ListFooterComponent={() =>
        loading && <ActivityIndicator color={Colors.darkRed} />
      }
    />
  );
}

export default MovieList;
