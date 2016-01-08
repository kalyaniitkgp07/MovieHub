import React, {Component} from 'react';
import Select from 'react-select';

export default class ReactSelect extends Component {
  render() {
    const {value, onBlur, ...props} = this.props; // onBlur and value was on this.props.fields.myField in MyForm
    return <Select
      value={value || ''}          // because react-select doesn't like the initial value of undefined
      onBlur={() => onBlur(value)} // just pass the current value (updated on change) on blur
      {...props}/>;                // options are part of other props
  }
}