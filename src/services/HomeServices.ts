import {keys} from './../../config';
import {MoviesResponse} from './../models/MovieModel';
import axios from 'axios';
const baseUrl = 'https://api.themoviedb.org/3';
export const getPopularMovies = async () => {
  const movieData = await axios.get<MoviesResponse>(
    baseUrl + `/movie/popular?api_key=${keys.apiKey}`,
  );
  return movieData.data;
};

export const getTrendingMovies = async () => {
  const res = await axios.get<MoviesResponse>(
    baseUrl + `/trending/movie/day?api_key=${keys.apiKey}`,
  );
  return res.data;
};

export const getTrendingTVshowsToday = async () => {
  const res = await axios.get<MoviesResponse>(
    baseUrl + `/trending/tv/day?api_key=${keys.apiKey}`,
  );
  return res.data;
};
export const getTopRatedMovies = async () => {
  const res = await axios.get<MoviesResponse>(
    baseUrl + `/movie/top_rated?api_key=${keys.apiKey}`,
  );
  return res.data;
};

export const getTrendingTVshowsWeekly = async () => {
  const res = await axios.get<MoviesResponse>(
    baseUrl + `/trending/tv/week?api_key=${keys.apiKey}`,
  );
  return res.data;
};
export const getUpcomingMovies = async () => {
  const res = await axios.get<MoviesResponse>(
    baseUrl +
      `/movie/upcoming?api_key=${keys.apiKey}&language=en-US&page=1&region=us`,
  );
  return res.data;
};
