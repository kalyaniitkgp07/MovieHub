import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import uniq from 'lodash/array/uniq';
import * as types from '../constants/ActionTypes';
import * as WebUtils from '../utils/webUtils';

const initialState = {  
  movies: [],
  moviesById: {}
};

export default function movies(state = initialState, action) {  
  switch (action.type) {

    case types.FETCH_MOVIES_SUCCESS:
      return assign(
        {},
        state,
        { movies     : uniq(state.movies.concat(Object.keys(action.payload))) },
        { moviesById : assign({}, state.moviesById, action.payload) },
      );

    case types.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movies     : uniq(state.movies.concat(Object.keys(action.payload))),
        moviesById : assign({}, state.moviesById, action.payload),
      };
        
    default:
      return state;
  }
}
