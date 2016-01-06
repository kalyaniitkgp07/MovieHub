import { createAction } from 'redux-actions';
import * as types from '../constants/ActionTypes';
import callApi from '../utils/webUtils';

export function addMovie(name) {  
  return {
    type: types.ADD_MOVIE,
    name
  };
}

export function deleteMovie(id) {  
  return {
    type: types.DELETE_MOVIE,
    id
  };
}

export function fetchMovies() {
  return {
    promise: callApi('/moviesinfo'),
    types: [types.FETCH_MOVIES_BEGIN, types.FETCH_MOVIES_SUCCESS, types.FETCH_MOVIES_ERROR],
  }
}

export const successFetchMovies = createAction(types.FETCH_MOVIES_SUCCESS);
export const errorFetchMovies = createAction(types.FETCH_MOVIES_ERROR);

