import {StyleSheet, View} from 'react-native';
import Colors from '../../../common/Colors';
import Header from '../components/Header';
import {NavigationProp} from '@react-navigation/native';
import MovieList from '../components/MovieList';
import {useRef, useState} from 'react';
import useFetch from '../../../common/hooks/useFetch';
import ApiURL from '../../../ApiURL';
import {getQueryParams} from '../utils';

interface IProps {
  navigation: NavigationProp<any>;
}

function HomeScreen(props: IProps) {
  const {navigation} = props;
  const [shouldReload, setShouldReload] = useState<boolean>(false);
  const selectedIdsSet = useRef(new Set<number>()).current;
  const {data: gerneObj} = useFetch(ApiURL.getGenreListUrl());
  const queryParams = getQueryParams({selectedIdsSet});
  return (
    <View style={styles.container}>
      <Header
        gerneList={gerneObj?.genres}
        setShouldReload={setShouldReload}
        selectedIdsSet={selectedIdsSet}
        navigation={navigation}
      />
      <MovieList queryParams={queryParams} />
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
