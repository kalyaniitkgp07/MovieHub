import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">TR Movie Hub</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/addmovie">Add Movie</Link></li> 
          </ul>
        </div>
      </nav>
    );
  }
}