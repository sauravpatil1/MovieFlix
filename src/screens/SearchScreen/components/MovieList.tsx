import {useEffect, useState} from 'react';
import Loader from '../../../common/components/Loader';
import MovieListCard from '../../HomeScreen/components/MovieListCard';
import useSearch from '../hooks/useSearch';
import ApiURL from '../../../ApiURL';

const DELAY = 300;

interface IProps {
  searchText: string;
}

function MovieList(props: IProps) {
  const {searchText} = props;
  const [url, setUrl] = useState<string>(ApiURL.getSearchUrl(searchText));
  useEffect(() => {
    setUrl(ApiURL.getSearchUrl(searchText));
  }, [searchText]);
  const {results, loading} = useSearch(url, DELAY);

  if (!results || loading) return <Loader />;
  return (
    <MovieListCard title={'Search Results'} movieList={results?.results} />
  );
}

export default MovieList;
