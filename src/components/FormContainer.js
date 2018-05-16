import React from 'react';
import _ from 'lodash';
import { Row, Col, CardText } from 'reactstrap';

import SavedAttributes from './SavedAttributes';
import DynamicForm from './DynamicForm';

export default props => (
  <Row>
    <Col lg="4">
      {!_.isEmpty(props.savedAttributes) ? (
        <SavedAttributes {...props} />
      ) : (
        <CardText className="mb-3">test field</CardText>
      )}
    </Col>
    <Col lg="8">
      {_.map(props.attributes, (attribute, key) => (
        <DynamicForm {...props} attribute={attribute} key={key} fieldId={key} />
      ))}
    </Col>
  </Row>
);
