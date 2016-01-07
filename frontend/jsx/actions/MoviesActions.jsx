import * as types from '../constants/ActionTypes';
import * as WebUtils from '../utils/webUtils';
import { WebAPIs } from '../constants/WebAPIs';

export function fetchMovies() {
  const url = WebAPIs.MOVIES_INFO;
  return {
    promise: WebUtils.callApi(url),
    types: [types.FETCH_MOVIES_BEGIN, types.FETCH_MOVIES_SUCCESS, types.FETCH_MOVIES_ERROR],
    url,
  }
}

export function fetchMovieDetails(movieId) {
  const url = WebAPIs.MOVIE_DETAILS(movieId);
  return {
    payload: movieId,
    promise: WebUtils.callApi(url),
    types: [types.FETCH_MOVIE_DETAILS_BEGIN, types.FETCH_MOVIE_DETAILS_SUCCESS, types.FETCH_MOVIE_DETAILS_ERROR],
    url,
  }
}
