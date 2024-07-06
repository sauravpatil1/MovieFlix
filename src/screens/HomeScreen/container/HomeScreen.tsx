import {StyleSheet, View} from 'react-native';
import Colors from '../../../common/Colors';
import Header from '../components/Header';
import {NavigationProp} from '@react-navigation/native';
import MovieList from '../components/MovieList';
import {useState} from 'react';

interface IProps {
  navigation: NavigationProp<any>;
}

function HomeScreen(props: IProps) {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View style={styles.container}>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <MovieList searchText={searchText} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
  },
});
