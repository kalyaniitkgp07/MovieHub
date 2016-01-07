import React from 'react';

export default class MovieRolePeopleListItem extends React.Component {
  render() {
    const { peopleInfo } = this.props;
    return (
      <li>
        {`${peopleInfo.firstName} ${peopleInfo.lastName}`}
      </li>
    );
  }
}
