import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class MovieListItem extends Component {

  render () {
    const { movie } = this.props;
    return (
      <div className="panel panel-default col-md-6 col-sm-12 movie-list-item">
        <div className="panel-heading movie-list-item-heading">{movie.title}</div>
        <div className="panel-body movie-list-item-body">{movie.description}</div>
        <div className="panel-footer pull-right movie-list-item-footer">
          <button type="button" className="btn btn-default">
            <Link to={`/movie/${movie.movieId}`}>DETAILS</Link>
          </button>
        </div>
      </div>
    );
  }

}