import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../../common/Colors';
import Constants from '../../../common/Constants';
import GenreList from './GenreList';

interface IProps {
  setSearchText: (text: string) => void;
  searchText: string;
}

function Header(props: IProps) {
  const {setSearchText, searchText} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{Constants.strings.movieFlix}</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="Search movie name"
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>
      <GenreList />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGrey,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginEnd: Constants.dimens.size_16,
    marginTop: Constants.dimens.size_8,
  },
  title: {
    color: Colors.darkRed,
    fontSize: Constants.fontSize.size_26,
    marginHorizontal: Constants.dimens.size_16,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: Constants.dimens.size_2,
    overflow: 'hidden',
    marginTop: Constants.dimens.size_8,
  },
});
