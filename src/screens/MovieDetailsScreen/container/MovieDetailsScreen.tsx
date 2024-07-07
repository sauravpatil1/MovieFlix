import {StyleSheet, View} from 'react-native';
import Colors from '../../../common/Colors';
import MovieCard from '../../common/components/MovieCard';
import {NavigationParams} from 'react-navigation';

interface IProps {
  route: NavigationParams;
}

function MovieDetailsScreen(props: IProps) {
  const {movie} = props.route?.params || {};
  return (
    <View style={styles.container}>
      <MovieCard movie={movie} />
    </View>
  );
}

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
