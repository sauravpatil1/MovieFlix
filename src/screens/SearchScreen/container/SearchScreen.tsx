import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../../../common/Colors';
import Constants from '../../../common/Constants';
import ApiURL from '../../../ApiURL';
import MovieList from '../../common/components/MovieList';
import useSearch from '../hooks/useSearch';

function SearchScreen() {
  const {searchText, debouncedSearchText, setSearchText} = useSearch();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search movie"
      />
      {debouncedSearchText && (
        <MovieList queryParams={`query=${debouncedSearchText}`} getApiUrl={ApiURL.getSearchUrl} />
      )}
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
