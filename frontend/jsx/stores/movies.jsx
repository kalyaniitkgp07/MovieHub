import {createStore} from 'redux';
import reducer from './reducers/movies';

export default function store() {
  return createStore(reducer);
}