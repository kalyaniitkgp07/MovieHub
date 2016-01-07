import fetch from 'isomorphic-fetch';

export function callApi(url, options) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(new Error('There is no URL provided for the request.'));
    }

    // if (!options) {
    //   reject(new Error('There are no options provided for the request.'));
    // }

    fetch(url, options).then(response => {
      return response.json();
    }).then(response => {
      console.log(response);
      if (!response.status) {
        return reject(response.error);
      } else {
        return resolve(response.result)
      }
    }).catch(error => {
      reject(error);
    });
  });
}

export const LOADING_STATUS = {
  NOT_REQUESTED : 'NOT_REQUESTED',
  LOADING : 'LOADING',
  SUCCESS : 'SUCCESS',
  ERROR : 'ERROR',
}

export const API_RESPONSE = {
  LOADING : {apiStatus : LOADING_STATUS.LOADING},
  SUCCESS : {apiStatus : LOADING_STATUS.SUCCESS},
  ERROR : (error) => ({apiStatus : LOADING_STATUS.ERROR, apiError: error}),

  IS_LOADING : (...apis) => apis.reduce((status, api) => status || api.apiStatus === LOADING_STATUS.LOADING, false),
  IS_SUCCESS : (...apis) => apis.reduce((status, api) => status && api.apiStatus === LOADING_STATUS.SUCCESS, true),
  IS_ERROR : (...apis) => apis.reduce((status, api) => status || api.apiStatus === LOADING_STATUS.ERROR, false),
}

export const getApiStatus = (apiResStatus, key) => (
  apiResStatus.hasOwnProperty(key) && apiResStatus[key].hasOwnProperty('apiStatus')
  ? apiResStatus[key]
  : { apiStatus : LOADING_STATUS.NOT_REQUESTED }
)
