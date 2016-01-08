import 'babel-polyfill';
import '../scss/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './components/RootComponent';

ReactDOM.render(
  <RootComponent />,
  $('#root')[0]
);
