import React, { Component } from 'react';
import _ from 'lodash';
import { Row, Col, CardText } from 'mdbreact';

import SavedAttributes from './SavedAttributes';
import DynamicForm from './DynamicForm';

export default class FormContainer extends Component {
  render() {
    const { savedAttributes, attributes } = this.props;
    return (
      <Row>
        <Col sm="4">
          <CardText>test</CardText>
          {!_.isEmpty(savedAttributes) ? (
            <SavedAttributes {...this.props} />
          ) : null}
        </Col>
        <Col sm="8">
          {_.map(attributes, (attribute, key) => (
            <DynamicForm
              {...this.props}
              attribute={attribute}
              key={key}
              fieldId={key}
            />
          ))}
        </Col>
      </Row>
    );
  }
}
