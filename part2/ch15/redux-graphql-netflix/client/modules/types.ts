import { ActionType, StateType } from 'typesafe-actions';
import { AxiosResponse } from 'axios';

export type MovieType = {
  title: string;
  cover: string;
  year: string;
  cost: number;
  starring: {
    name: string;
  }[]
};

export const FETCH_MOVIES = 'movies/FETCH_MOVIES';
export const FETCH_MOVIE = 'movies/FETCH_MOVIE';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./store').default>;

  export type RootState = StateType<typeof import('./reducers').default>;

  export type RootAction = ActionType<typeof import('./actions').RootActions>;

  interface Types {
    RootAction: RootAction;
  }
}

export interface StoreState {
  all: MovieType[],
  current: MovieType
}

interface MovieResponseData {
  data: {
    movies: MovieType[];
    movie: MovieType;
  }
}

export type MovieResponse = AxiosResponse<MovieResponseData>;