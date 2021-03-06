import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Container, Col, Row, Card, CardBody } from 'reactstrap';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FormContainer from './components/FormContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: { 0: '' },
      savedAttributes: [],
    };
  }

  removeAttribute = fieldId => {
    console.log('clicked');
    const { attributes } = this.state;
    delete attributes[fieldId];
    this.setState({ attributes });
  };

  onAttributeChange = (e, fieldId) => {
    fieldId = parseInt(fieldId, 10);
    const { attributes } = this.state;
    const value = e.target.value;
    attributes[fieldId] = value;
    if (value === '') {
      this.removeAttribute(fieldId);
    }

    if (
      attributes[fieldId] &&
      attributes[fieldId].length <= 1 &&
      attributes[fieldId].length > 0
    ) {
      attributes[fieldId + 1] = '';
    }

    this.setState({ attributes });
  };

  handleSave = () => {
    const { attributes } = this.state;
    const savedAttributes = _.values(attributes).filter(Boolean);
    this.setState({ savedAttributes });
  };

  render() {
    return (
      <Container id="component-container">
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <FormContainer
                  onAttributeChange={this.onAttributeChange}
                  removeAttribute={this.removeAttribute}
                  {...this.state}
                />
              </CardBody>
              <div className="card-footer">
                <button
                  type="button"
                  className="btn btn-link btn-cancel"
                  onClick={e => e.preventDefault()}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-save"
                  onClick={this.handleSave}
                >
                  Save
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

App.propTypes = {
  attribute: PropTypes.string,
  attributes: PropTypes.object,
  savedAttributes: PropTypes.array,
  fieldId: PropTypes.number,
  onAttributeChange: PropTypes.func,
  removeAttribute: PropTypes.func,
};

export default App;
