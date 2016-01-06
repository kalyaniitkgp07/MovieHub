import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

  render() {
    return (
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/movies">Movies</Link>
        {' '}
        <Link to="/movie/1">First Movie</Link>
      </header>
    );
  }
}