import * as types from '../constants/ActionTypes';
import * as WebUtils from '../utils/webUtils';
import { WebAPIs } from '../constants/WebAPIs';

export function addMovie() {
  const
    url = WebAPIs.ADD_MOVIE,
    options = {
      method : 'POST',
      body : JSON.stringify({movieArgs : { 'title' : 'Sunt culpa qui sint sunt cillum et laborum amet enim consectetur commodo.', 'description' : 'Occaecat officia do excepteur cillum cupidatat ipsum consectetur nostrud. Sint ullamco nisi elit excepteur magna officia anim. Non mollit mollit occaecat fugiat occaecat nostrud do reprehenderit laborum adipisicing. Dolor culpa non id laboris velit aliqua deserunt labore deserunt qui exercitation consectetur. Sint elit occaecat.', 'people' : { 'ACTOR' : { 'peopleIdList' : [74, 4, 75, 2, 3, 93], }, 'DIRECTOR' : { 'peopleIdList' : [39], }, 'EDITOR' : { 'peopleIdList' : [83], }, }, }}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };

  return {
    promise: WebUtils.callApi(url, options),
    types: [types.ADD_MOVIE_BEGIN, types.ADD_MOVIE_SUCCESS, types.ADD_MOVIE_ERROR],
    url,
  }
}