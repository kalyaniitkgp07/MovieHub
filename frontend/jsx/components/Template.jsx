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
       <div className="col-lg-8 col-md-10 col-sm-12 col-md-offset-1 col-lg-offset-2">
          {this.props.children}
        </div>
     </div>
    );
  }
}