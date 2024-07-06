import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Colors from '../Colors';

function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Colors.darkRed} />
    </View>
  );
}

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
