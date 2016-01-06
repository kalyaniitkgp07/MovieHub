import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './components/RootComponent';

ReactDOM.render(
  <RootComponent />,
  $('#root')[0]
);
