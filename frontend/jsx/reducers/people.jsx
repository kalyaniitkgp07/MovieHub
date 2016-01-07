import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import uniq from 'lodash/array/uniq';
import * as types from '../constants/ActionTypes';
import * as WebUtils from '../utils/webUtils';

const initialState = {  
  people     : [],
  peopleById : {}
};

export default function people(state = initialState, action) {  
  switch (action.type) {
    
    case types.FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        people     : uniq(state.people.concat(Object.keys(action.payload))),
        peopleById : assign({}, state.peopleById, action.payload),
      };

    default:
      return state;
  }
}
