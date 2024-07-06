import {StyleSheet, View} from 'react-native';
import Colors from '../../../common/Colors';
import Header from '../components/Header';
import {NavigationProp} from '@react-navigation/native';
import MovieList from '../components/MovieList';

interface IProps {
  navigation: NavigationProp<any>;
}

function HomeScreen(props: IProps) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <MovieList />
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
