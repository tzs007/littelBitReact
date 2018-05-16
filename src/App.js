import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Container, Col, Row, Card, CardBody } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FormContainer from './components/FormContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: { 0: '' },
      savedAttributes: {},
    };
  }

  removeAttribute = key => {
    const { attributes } = this.state;
    delete attributes[key];
    this.setState({ attributes });
  };

  onAttributeChange = (e, key) => {
    const { attributes } = this.state;
    const value = e.target.value;
    attributes[key] = value;
    if (value === '') {
      this.removeAttribute(key);
    }

    const length = Object.keys(attributes).length;

    if (attributes[length] !== '' && attributes[length + 1] !== '') {
      attributes[key + 1] = '';
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
};

export default App;
