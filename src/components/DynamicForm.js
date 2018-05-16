import React, { Component } from 'react';
import { Input } from 'mdbreact';

export default class DynamicForm extends Component {
  render() {
    const {
      attributes,
      attribute,
      fieldId,
      onAttributeChange,
      removeAttribute,
    } = this.props;

    return (
      <div className="d-flex flex-row justify-content-end align-items-baseline">
        <div className="flex-fill">
          <Input
            value={attribute}
            label="test attribute"
            type="text"
            size="sm"
            onChange={e => onAttributeChange(e, fieldId)}
            tabIndex={fieldId + 1}
          />
        </div>
        {attributes[fieldId] !== '' ? (
          <div>
            <button
              type="button"
              className="btn btn-link btn-remove"
              onClick={() => removeAttribute(attribute, fieldId)}
            >
              &times;
            </button>
          </div>
        ) : (
          <div className="btn-placeholder" />
        )}
      </div>
    );
  }
}
