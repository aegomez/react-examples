import { createStandardAction } from 'typesafe-actions';
import { FETCH_MOVIES, FETCH_MOVIE, MovieType } from './types';

export const fetchMoviesAC = createStandardAction(FETCH_MOVIES).map(
  (movies: MovieType[]) => ({
    payload: { movies }
  })
);

export const fetchMovieAC = createStandardAction(FETCH_MOVIE).map(
  (index: number) => ({
    payload: { index }
  })
);

export const RootActions = {
  movies: { fetchMoviesAC, fetchMovieAC }
};