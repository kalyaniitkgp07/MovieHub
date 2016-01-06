import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import uniq from 'lodash/array/uniq';
import * as types from '../constants/ActionTypes';

const initialState = {  
  movies: [],
  moviesById: {}
};

export default function movies(state = initialState, action) {  
  switch (action.type) {

    // case types.ADD_MOVIE:
    //   const newId = state.movies[state.movies.length-1] + 1;
    //   return {
    //     movies: state.movies.concat(newId),
    //     moviesById: {
    //       ...state.moviesById,
    //       [newId]: {
    //         id: newId,
    //         name: action.name
    //       }
    //     }
    //   }

    // case types.DELETE_MOVIE:  
    //   return {
    //     ...state,
    //     movies: state.movies.filter(id => id !== action.id),
    //     moviesById: omit(state.moviesById, action.id)
    //   }

    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: uniq(state.movies.concat(Object.keys(action.payload))),
        moviesById: assign({}, state.moviesById, action.payload)
      };

    default:
      return state;
  }
}
