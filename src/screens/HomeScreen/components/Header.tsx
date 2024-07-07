import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../common/Colors';
import Constants from '../../../common/Constants';
import GenreList from './GenreList';
import {IGenre} from '../interface';
import {navigateToSearchScreen} from '../../../navigationUtils';

const SEARCH_ICON = require('./../../../assets/searchIcon.png');

interface IProps {
  gerneList: IGenre[];
  setShouldReload: (reload: any) => void;
  selectedIdsSet: Set<number>;
}

function Header(props: IProps) {
  const {gerneList, setShouldReload, selectedIdsSet} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{Constants.strings.movieFlix}</Text>
        <Pressable onPress={navigateToSearchScreen}>
          <Image source={SEARCH_ICON} />
        </Pressable>
      </View>
      <GenreList
        gerneList={gerneList}
        selectedIdsSet={selectedIdsSet}
        setShouldReload={setShouldReload}
      />
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
});
