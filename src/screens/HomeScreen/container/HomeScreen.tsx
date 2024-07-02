import {StyleSheet, View} from 'react-native';
import Colors from '../../../common/Colors';
import Header from '../components/Header';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
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
