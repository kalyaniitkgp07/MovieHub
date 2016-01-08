import reduce from 'lodash/collection/reduce';
import map from 'lodash/collection/map';
import * as types from '../constants/ActionTypes';
import * as WebUtils from '../utils/webUtils';
import { WebAPIs } from '../constants/WebAPIs';

function parseFormData(formData) {
  // TODO: check against schema instead of this hanky panky process
  const moviepeople = reduce(formData.people, (retPeople, role, roleId) => {
    if(role.peopleIdList) {
      retPeople[roleId] = {
        peopleIdList : map(role.peopleIdList.split(','), (id) => parseInt(id))
      };
    }
    return retPeople;
  }, {});
  let movieArgs = {
    title       : formData.title,
    description : formData.description,
    people      : moviepeople,
  };
  
  return movieArgs;
}

export function addMovie(formData) {
  const movieArgs = parseFormData(formData);
  const
    url = WebAPIs.ADD_MOVIE,
    options = {
      method : 'POST',
      body   : JSON.stringify({movieArgs}),
    };

  return {
    promise : WebUtils.callApi(url, options),
    types   : [types.ADD_MOVIE_BEGIN, types.ADD_MOVIE_SUCCESS, types.ADD_MOVIE_ERROR],
    url,
  }
}