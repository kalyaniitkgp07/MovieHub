const WebAPIs = {
  MOVIES_INFO   : '/api/moviesinfo',
  MOVIE_DETAILS : (movieId) => `/api/movie/${movieId}`,
  ADD_MOVIE     : '/api/addmovie',
  PEOPLE_INFO   : '/api/peopleinfo',
  ROLES_INFO    : '/api/rolesinfo',
};

export { WebAPIs };