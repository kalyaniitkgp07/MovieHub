import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import uniq from 'lodash/array/uniq';
import * as types from '../constants/ActionTypes';
import * as WebUtils from '../utils/webUtils';

const initialState = {  
  roles: [],
  rolesById: {}
};

export default function roles(state = initialState, action) {  
  switch (action.type) {
    
    case types.FETCH_ROLES_SUCCESS:
      return {
        ...state,
        roles     : uniq(state.roles.concat(Object.keys(action.payload))),
        rolesById : assign({}, state.rolesById, action.payload),
      };
      
    default:
      return state;
  }
}
