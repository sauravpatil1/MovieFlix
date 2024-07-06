import {Image, StyleSheet, Text, View} from 'react-native';
import {IMovie} from '../interface';
import Constants from '../../../common/Constants';
import Colors from '../../../common/Colors';
interface IProps {
  movie: IMovie;
}

const IMAGE_URL =
  'https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900';
function MovieCard(props: IProps) {
  const {movie} = props;
  const {title, overview} = movie;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: IMAGE_URL}} />
      <View>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {overview}
        </Text>
      </View>
    </View>
  );
}

export default MovieCard;

const styles = StyleSheet.create({
  image: {
    height: 200,
  },
  container: {
    height: 300,
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
