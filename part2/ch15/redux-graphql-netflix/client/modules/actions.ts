import { createStandardAction } from 'typesafe-actions';
import { FETCH_MOVIES, FETCH_MOVIE, MovieResponse } from './types';

export const fetchMoviesAC = createStandardAction(FETCH_MOVIES).map(
  (response: MovieResponse) => ({
    payload: { movies: response.data.data.movies }
  })
);

export const fetchMovieAC = createStandardAction(FETCH_MOVIE).map(
  (response: MovieResponse) => ({
    payload: { movie: response.data.data.movie }
  })
);

export const RootActions = {
  movies: { fetchMoviesAC, fetchMovieAC }
};