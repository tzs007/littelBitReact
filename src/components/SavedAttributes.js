import React, { Component } from 'react';
import _ from 'lodash';
import { ListGroup, ListGroupItem } from 'mdbreact';

export default class SavedAttributes extends Component {
  render() {
    const { savedAttributes } = this.props;
    return (
      <ListGroup>
        <ListGroupItem className="font-weight-bold">
          Congrats!<br />
          You have saved those attributes.
        </ListGroupItem>
        {_.map(savedAttributes, (savedAttribute, index) => (
          <ListGroupItem key={index}>{savedAttribute}</ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}
