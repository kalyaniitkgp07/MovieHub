import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import Header from './Header';

function Template({ pushPath, children }) {
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => pushPath('/movies')}>Go to /movies</button>
      </div>
      <div>{children}</div>
    </div>
  );
};

module.exports = connect(
  null,
  { pushPath }
)(Template);