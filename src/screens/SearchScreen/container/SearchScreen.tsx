import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../../../common/Colors';
import Constants from '../../../common/Constants';
import {useState} from 'react';
import ApiURL from '../../../ApiURL';
import MovieList from '../../common/components/MovieList';

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
      {searchText && <MovieList queryParams={`query=${searchText}`} getApiUrl={ApiURL.getSearchUrl}/>}
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
