import omit from 'lodash/object/omit';
import * as types from '../constants/ActionTypes';

const initialState = {  
  movies: [1, 2, 3],
  moviesById: {
    1: {
      id: 1,
      name: 'Theodore Roosevelt'
    },
    2: {
      id: 2,
      name: 'Abraham Lincoln'
    },
    3: {
      id: 3,
      name: 'George Washington'
    }
  }
};

export default function movies(state = initialState, action) {  
  console.log(action.type);
  switch (action.type) {

    case types.ADD_MOVIE:
      const newId = state.movies[state.movies.length-1] + 1;
      return {
        movies: state.movies.concat(newId),
        moviesById: {
          ...state.moviesById,
          [newId]: {
            id: newId,
            name: action.name
          }
        }
      }

    case types.DELETE_MOVIE:  
      return {
        ...state,
        movies: state.movies.filter(id => id !== action.id),
        moviesById: omit(state.moviesById, action.id)
      }

    case types.REQUEST_MOVIES:
      return state;

    case types.RECIEVE_MOVIES:
      console.log(actions.movies);
      return {
        movies: [],
        moviesById : {}
      }

    default:
      return state;
  }
}
