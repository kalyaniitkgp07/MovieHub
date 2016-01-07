import * as types from '../constants/ActionTypes';
import * as WebUtils from '../utils/webUtils';

let initialState = {};

export default function apiResStatus(state = initialState, action) {  
  switch (action.type) {

    case types.API_BEGIN:
      console.log('API_BEGIN:::', action);
      return {
        ...state,
        [action.url] : WebUtils.API_RESPONSE.LOADING
      };

    case types.API_SUCCESS:
      console.log('API_SUCCESS:::', action);
      return {
        ...state,
        [action.url] : WebUtils.API_RESPONSE.SUCCESS
      };

    case types.API_ERROR:
      console.log('API_ERROR:::', action);
      return {
        ...state,
        [action.url] : WebUtils.API_RESPONSE.ERROR(action.payload)
      };

    default:
      return state;
  }
}
