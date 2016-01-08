import * as types from '../constants/ActionTypes';
import * as WebUtils from '../utils/webUtils';

let initialState = {};

export default function apiResStatus(state = initialState, action) {  
  switch (action.type) {

    case types.API_BEGIN:
      return {
        ...state,
        [action.url] : WebUtils.API_RESPONSE.LOADING
      };

    case types.API_SUCCESS:
      return {
        ...state,
        [action.url] : WebUtils.API_RESPONSE.SUCCESS
      };

    case types.API_ERROR:
      return {
        ...state,
        [action.url] : WebUtils.API_RESPONSE.ERROR(action.payload)
      };

    default:
      return state;
  }
}
