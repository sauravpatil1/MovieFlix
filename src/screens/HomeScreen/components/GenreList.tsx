import {ScrollView, StyleSheet} from 'react-native';
import Constants from '../../../common/Constants';
import Button from '../../../common/components/Button';

const genre = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'Foreign',
  'History',
  'Horror',
  'Musical',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Sport',
  'Thriller',
  'War',
  'Western',
];

function GenreList() {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {genre.map(name => {
        return (
          <Button
            title={name}
            style={styles.button}
            active={name === 'Comedy'}
          />
        );
      })}
    </ScrollView>
  );
}

export default GenreList;

const styles = StyleSheet.create({
  container: {
    marginStart: Constants.dimens.size_16,
    marginVertical: Constants.dimens.size_16,
  },
  button: {
    marginEnd: Constants.dimens.size_8,
  },
});
