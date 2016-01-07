import { createAction } from 'redux-actions';
import * as types from '../constants/ActionTypes';
import * as WebUtils from '../utils/webUtils';
import { WebAPIs } from '../constants/WebAPIs';

export function fetchRoles() {
  const url = WebAPIs.ROLES_INFO;
  return {
    promise: WebUtils.callApi(url),
    types: [types.FETCH_ROLES_BEGIN, types.FETCH_ROLES_SUCCESS, types.FETCH_ROLES_ERROR],
    url,
  }
}
