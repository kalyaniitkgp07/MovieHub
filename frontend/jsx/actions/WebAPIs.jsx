import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes';

function requestMovies() {
  return {
    type: types.REQUEST_MOVIES,
    
  }
}

function receiveMovies(json) {
  console.log(json);
  return {
    type: types.RECEIVE_MOVIES,
    movies: json,
    receivedAt: Date.now()
  }
}

export function fetchMovies() {
  return dispatch => {
    dispatch(requestMovies())
    return fetch('/moviesinfo')
      .then(response => response.json())
      .then(json => dispatch(receiveMovies(json)))
  }
}
