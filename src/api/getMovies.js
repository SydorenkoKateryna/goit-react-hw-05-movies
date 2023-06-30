import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ee704e183d11b50a0d8be9a20340402f';

export const getTrendingMovies = async page => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`
  );

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  return response;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  return response;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  return response;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  return response;
};

export const getSearchMovies = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  return response;
};
