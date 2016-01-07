import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import Header from './Header';

@connect(null, {pushPath})
export default class Template extends React.Component {
  render() {
    return (
      <div>
       <Header />
       <div>
         <button onClick={() => this.props.pushPath('/movies')}>Go to /movies</button>
       </div>
       <div>{this.props.children}</div>
     </div>
    );
  }
}