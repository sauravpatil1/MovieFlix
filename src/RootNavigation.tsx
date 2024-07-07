import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Constants from './common/Constants';
import HomeScreen from './screens/HomeScreen/container/HomeScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen/container/MovieDetailsScreen';
import SearchScreen from './screens/SearchScreen/container/SearchScreen';

const Stack = createNativeStackNavigator();

const routeConfig = {
  [Constants.screens.homeScreen]: {
    screen: HomeScreen,
  },
  [Constants.screens.movieDetailsScreen]: {
    screen: MovieDetailsScreen,
  },
  [Constants.screens.searchScreen]: {
    screen: SearchScreen,
  },
};

const screenOptions = {header: () => null};

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Constants.screens.homeScreen}
        screenOptions={screenOptions}>
        {Object.keys(routeConfig).map(screenName => {
          const screenComponent = routeConfig[screenName].screen;
          return (
            <Stack.Screen
              name={screenName}
              component={screenComponent}
              key={screenName}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
