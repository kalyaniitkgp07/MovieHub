export default function promiseMiddleware(store) {

  return (next) => {
    return (action) => {

      const { promise, types, ...rest } = action;

      if (!promise) {
        return next(action);
      }

      const [BEGIN, SUCCESS, FAILURE] = types;
      let { API_BEGIN, API_SUCCESS, API_ERROR } = require('../constants/ActionTypes');

      if(!action.url) {
        return Promise.reject(new Error('URL required for the request.'));
      }

      next({ ...rest, type: BEGIN });
      next({ ...rest, type: API_BEGIN });

      return promise
        .then(res => {
          next({ ...rest, payload: res, type: SUCCESS });
          next({ ...rest, type: API_SUCCESS});
          
          return true;
        })
        .catch(error => {
          next({ ...rest, payload: error, type: FAILURE });
          next({ ...rest, type: API_ERROR});
          
          console.log(error);
          return false;
        });
    }
  }
}
