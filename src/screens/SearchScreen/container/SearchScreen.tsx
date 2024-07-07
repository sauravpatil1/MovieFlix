import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../../../common/Colors';
import Constants from '../../../common/Constants';
import MovieList from '../components/MovieList';
import {useState} from 'react';

function SearchScreen() {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search movie"
      />
      <MovieList searchText={searchText} />
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    borderRadius: Constants.dimens.size_2,
    overflow: 'hidden',
    margin: Constants.dimens.size_8,
  },
});
