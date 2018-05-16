import React from 'react';
import _ from 'lodash';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default props => (
  <ListGroup className="mb-3">
    <ListGroupItem className="font-weight-bold">
      Congrats!<br />
      You have saved those attributes.
    </ListGroupItem>
    {_.map(props.savedAttributes, (savedAttribute, index) => (
      <ListGroupItem key={index}>{savedAttribute}</ListGroupItem>
    ))}
  </ListGroup>
);
