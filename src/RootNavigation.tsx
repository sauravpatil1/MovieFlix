import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Constants from './common/Constants';
import HomeScreen from './screens/HomeScreen/container/HomeScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen/container/MovieDetailsScreen';

const Stack = createNativeStackNavigator();

const routeConfig = {
  [Constants.screens.homeScreen]: {
    screen: HomeScreen,
  },
  [Constants.screens.movieDetailsScreen]: {
    screen: MovieDetailsScreen,
  },
};

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Constants.screens.homeScreen}>
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
