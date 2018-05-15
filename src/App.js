import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  Container,
  Col,
  Row,
  Input,
  Card,
  CardBody,
  CardText,
  ListGroup,
  ListGroupItem,
} from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: [''],
      savedAttributes: [],
    };
  }

  addAttribute = value => {
    const { attributes } = this.state;
    attributes.push(value);
    this.setState({ attributes });
  };

  removeAttribute = key => {
    const { attributes } = this.state;
    if (attributes.length > 0) {
      attributes.splice(key, 1);
    }
    this.setState({ attributes });
  };

  handleKeyPress = e => {
    const value = e.target.value;
    const { attributes } = this.state;
    if (e.keyCode !== 8 && value.length <= 1 && value.length > 0) {
      this.addAttribute(value);
    }
  };

  handleKeyUp = (e, key) => {
    const value = e.target.value;
    const { attributes } = this.state;
    if (e.keyCode === 8 && value.length === 0 && attributes.length >= 1) {
      this.removeAttribute(key);
    }
  };

  onAttributeChange = (e, key) => {
    const value = e.target.value;
    const { attributes } = this.state;
    attributes[key] = value;
    this.setState({ attributes });
  };

  handleSave = () => {
    const { attributes } = this.state;
    const savedAttributes = attributes.filter(Boolean);
    this.setState({ savedAttributes });
  };

  render() {
    const { attributes, savedAttributes } = this.state;
    return (
      <Container id="component-container">
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="4">
                    <CardText>test</CardText>
                    {!_.isEmpty(savedAttributes) ? (
                      <ListGroup>
                        <ListGroupItem className="font-weight-bold">
                          Congrats!<br />
                          You have saved those attributes.
                        </ListGroupItem>
                        {_.map(savedAttributes, (savedAttribute, index) => (
                          <ListGroupItem key={index}>
                            {savedAttribute}
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                    ) : null}
                  </Col>
                  <Col sm="8">
                    {_.map(attributes, (attribute, key) => (
                      <div
                        key={key}
                        className="d-flex flex-row justify-content-end align-items-baseline"
                      >
                        <div className="flex-fill">
                          <Input
                            value={attribute}
                            label="test attribute"
                            type="text"
                            size="sm"
                            onChange={e => this.onAttributeChange(e, key)}
                            onKeyPress={e => this.handleKeyPress(e)}
                            onKeyUp={e => this.handleKeyUp(e, key)}
                            tabindex={key + 1}
                          />
                        </div>
                        {attributes.length - 1 > key ? (
                          <div>
                            <button
                              type="button"
                              className="btn btn-link btn-remove"
                              onClick={() => this.removeAttribute(key)}
                            >
                              &times;
                            </button>
                          </div>
                        ) : (
                          <div className="btn-placeholder" />
                        )}
                      </div>
                    ))}
                  </Col>
                </Row>
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

App.propTypes = {};

export default App;
