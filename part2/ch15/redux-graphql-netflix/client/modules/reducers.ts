import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { fetchMoviesAC, fetchMovieAC } from './actions';
import { MovieType, StoreState } from './types';

const initialState: StoreState = {
  all: [],
  current: {} as MovieType
};

export const movieReducer = createReducer(initialState)
  .handleAction(fetchMoviesAC, (state, action) => ({
    ...state,
    all: action.payload.movies
  }))
  .handleAction(fetchMovieAC, (state, action) => ({
    ...state,
    current: action.payload.movie
  }));

export default combineReducers({
  movies: movieReducer
  // more reducers go here
});