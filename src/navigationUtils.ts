/**
 * Common navigation file from which we can use function to navigate to defferent screens.
 * Added interceptor to navigate function to have control at single point
 * It avoid prop drill down of navigation object
 */

import {createNavigationContainerRef} from '@react-navigation/native';
import Constants from './common/Constants';
import {IMovie} from './screens/HomeScreen/interface';

export const navigationRef = createNavigationContainerRef();

export function navigate(...args) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  }
}

export function navigateToSearchScreen() {
  navigate(Constants.screens.searchScreen);
}

export function navigateToMovieDetailsScreen(movie: IMovie) {
  navigate(Constants.screens.movieDetailsScreen, {movie});
}
