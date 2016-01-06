import fetch from 'isomorphic-fetch';

export default function callApi(url, options) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(new Error('There is no URL provided for the request.'));
    }

    // if (!options) {
    //   reject(new Error('There are no options provided for the request.'));
    // }

    fetch(url).then(response => {
      return response.json();
    }).then(response => {
      console.log(response);
      // if (response.status >= 200 && response.status < 300) {
      //   return response.errors ? reject(response.errors) : reject(response);
      // } else {
      //   return resolve(response)
      // }
      return resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}
