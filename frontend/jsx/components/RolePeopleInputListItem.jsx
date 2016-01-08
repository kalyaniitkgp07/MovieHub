import React from 'react';
import ReactSelect from './ReactSelect';

export default class RolePeopleInputListItem extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label>{this.props.roleInfo.name}</label>
        <ReactSelect
          options     = {this.props.peopleOptions}
          multi       = {true}
          placeholder = "Type name to add people"
          {...this.props.peopleIdList}
        />
      </div>
    );
  }
}
