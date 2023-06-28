import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const params = new URLSearchParams({
  api_key: 'ee704e183d11b50a0d8be9a20340402f',
  page: 1,
});

export const getTrendingMovies = async page => {
  const paramsForTrendingMovies = new URLSearchParams({
    api_key: 'ee704e183d11b50a0d8be9a20340402f',
    page,
  });

  const response = await axios.get(
    `${BASE_URL}trending/movie/day?${paramsForTrendingMovies.toString()}`
  );

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  return response;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?${params.toString()}`
  );

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  return response;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?${params.toString()}`
  );

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  return response;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?${params.toString()}`
  );

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  return response;
};

export const getSearchMovies = async (query, page) => {
  const paramsForSearchMovies = new URLSearchParams({
    api_key: 'ee704e183d11b50a0d8be9a20340402f',
    page,
  });

  const response = await axios.get(
    `${BASE_URL}/search/movie?${paramsForSearchMovies.toString()}&query=${query}`
  );

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  return response;
};
