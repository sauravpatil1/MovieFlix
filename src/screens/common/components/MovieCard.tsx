import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Constants from '../../../common/Constants';
import Colors from '../../../common/Colors';
import {IMovie} from '../../HomeScreen/interface';
import {navigateToMovieDetailsScreen} from '../../../navigationUtils';

interface IProps {
  movie: IMovie;
}

function MovieCard(props: IProps) {
  const {movie} = props;
  const {title, overview, poster_path} = movie;
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigateToMovieDetailsScreen(movie);
      }}>
      <Image
        style={styles.image}
        source={{uri: Constants.IMAGE_HOST + poster_path}}
      />
      <View>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {overview}
        </Text>
      </View>
    </Pressable>
  );
}

export default MovieCard;

const styles = StyleSheet.create({
  image: {
    height: Constants.dimens.size_200,
    resizeMode: 'contain',
  },
  container: {
    height: Constants.dimens.size_300,
    padding: Constants.dimens.size_8,
    width: '100%',
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: Constants.fontSize.size_14,
    marginTop: Constants.dimens.size_8,
  },
  description: {
    color: Colors.lightGrey,
    marginTop: Constants.dimens.size_4,
  },
});
