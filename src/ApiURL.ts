const BASE_URL = 'https://api.themoviedb.org/';

const ApiURL = {
  getMovieListUrl(params: string) {
    return `${BASE_URL}3/discover/movie?api_key=2dca580c2a14b55200e784
d157207b4d&${params}`;
  },
};

export default ApiURL;
