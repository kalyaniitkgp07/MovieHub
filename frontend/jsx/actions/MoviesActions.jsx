import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

export function addMovie(name) {  
  return {
    type: types.ADD_MOVIE,
    name
  };
}

export function deleteMovie(id) {  
  return {
    type: types.DELETE_MOVIE,
    id
  };
}

// export function fetchMoviesInfo() {
//   console.log('FETCH');
//   return {
//     type: 'FETCH_MOVIES_INFO',
//     payload: {
//       promise: fakeFetch(),
//     }
//   };
// }

// function fakeFetch() {
//   return new Promise((resolve, reject) => {
//     // if (!url) {
//     //   reject(new Error('There is no URL provided for the request.'));
//     // }

//     // if (!options) {
//     //   reject(new Error('There are no options provided for the request.'));
//     // }

//     fetch('/moviesinfo').then(response => {
//       return response.json();
//     }).then(response => {
//       console.log(response);
//       // if (response.status >= 200 && response.status < 300) {
//       //   return response.errors ? reject(response.errors) : reject(response);
//       // } else {
//       //   return resolve(response)
//       // }
//       return resolve(response);
//     }).catch(error => {
//       reject(error);
//     });
//   });
// }
