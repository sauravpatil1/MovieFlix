import {FlashList} from '@shopify/flash-list';
import {useRef} from 'react';
import {movies} from '../../../apiData';
import MovieListCard from './MovieListCard';

function MovieList() {
  const currYear = useRef<number>(2012);
  function renderItem({item, index}) {
    return (
      <MovieListCard title={item.year} movieList={item.movieList.results} />
    );
  }
  return <FlashList data={movies} renderItem={renderItem} />;
}

export default MovieList;
