import { createAction } from 'redux-actions';
import * as types from '../constants/ActionTypes';
import * as WebUtils from '../utils/webUtils';
import { WebAPIs } from '../constants/WebAPIs';

export function fetchPeople() {
  const url = WebAPIs.PEOPLE_INFO;
  return {
    promise: WebUtils.callApi(url),
    types: [types.FETCH_PEOPLE_BEGIN, types.FETCH_PEOPLE_SUCCESS, types.FETCH_PEOPLE_ERROR],
    url,
  }
}
