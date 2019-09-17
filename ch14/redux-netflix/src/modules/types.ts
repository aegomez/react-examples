import { ActionType, StateType } from 'typesafe-actions';

export type MovieType = typeof import('../movies.json')[0];

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