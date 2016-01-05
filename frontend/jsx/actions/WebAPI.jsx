export function fetchMoviesInfo() {
  return {
    type: 'FETCH_MOVIES_INFO',
    payload: {
      promise: fakeFetch(),
      data: data
    }
  };
}

function fakeFetch = () => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(new Error('There is no URL provided for the request.'));
    }

    if (!options) {
      reject(new Error('There are no options provided for the request.'));
    }

    fetch().then(response => {
      return response.json();
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.errors ? reject(response.errors) : reject(response);
      } else {
        return resolve(response)
      }
    }).catch(error => {
      reject(error);
    });
  });
}

function fetch = () => response = {
  status : 202,
  result : 'GOT IT',
}
