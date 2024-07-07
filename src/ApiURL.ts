const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '2dca580c2a14b55200e784d157207b4d';

const ApiURL = {
  getMovieListUrl(params: string) {
    return `${BASE_URL}3/discover/movie?api_key=${API_KEY}&${params}`;
  },
  getGenreListUrl() {
    return `${BASE_URL}3/genre/movie/list?api_key=${API_KEY}`;
  },
  getSearchUrl(params: string) {
    return `${BASE_URL}3/search/movie?api_key=${API_KEY}&${params}`;
  },
};

export default ApiURL;
