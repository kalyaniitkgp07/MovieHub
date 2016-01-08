import React from 'react';
import map from 'lodash/collection/map';
import RolePeopleInputListItem from './RolePeopleInputListItem';

export default class RolePeopleInputList extends React.Component {
  render() {
    return (
      <div>
      {
        map(this.props.rolelist, (roleInfo, roleId) => (
          <RolePeopleInputListItem 
            key = {roleId}
            roleInfo = {roleInfo}
            peopleOptions={this.props.peopleOptions}
            {...this.props[roleId]}
          />
        ))
      }
      </div>
    );
  }
}
