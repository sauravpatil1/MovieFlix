import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import RootNavigation from './src/RootNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigation />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
