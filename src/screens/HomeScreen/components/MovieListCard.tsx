import {StyleSheet, Text} from 'react-native';
import {IMovie} from '../interface';
import MovieCard from './MovieCard';
import Grid from '../../../common/components/Grid';
import Constants from '../../../common/Constants';
import Colors from '../../../common/Colors';

interface IProps {
  title: string;
  movieList: IMovie[];
}

function MovieListCard(props: IProps) {
  const {title, movieList} = props;
  if (!movieList || movieList.length<=0) return null;
  function renderItem(item: IMovie, index: number) {
    if (!item) return null;
    return <MovieCard movie={item} />;
  }
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Grid
        data={movieList}
        renderCell={renderItem}
        columns={2}
        containerStyle={styles.gridContainer}
      />
    </>
  );
}

export default MovieListCard;

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    marginStart: Constants.dimens.size_16,
    fontWeight: 'bold',
    fontSize: Constants.fontSize.size_18,
  },
  gridContainer: {
    marginHorizontal: Constants.dimens.size_8,
  },
});
