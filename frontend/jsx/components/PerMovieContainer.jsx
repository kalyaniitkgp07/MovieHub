import React from 'react';
import MovieRoleList from './MovieRoleList';

export default class PerMovieContainer extends React.Component {

  render() {
    const { movie, people, roles } = this.props;
    return (
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <MovieRoleList {...this.props} />
      </div>
    );
  }
}