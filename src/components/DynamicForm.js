import React from 'react';
import { Input } from 'mdbreact';

export default props => (
  <div className="d-flex flex-row justify-content-end align-items-baseline">
    <div className="flex-fill">
      <Input
        value={props.attribute}
        label="test attribute"
        type="text"
        size="sm"
        onChange={e => props.onAttributeChange(e, props.fieldId)}
        tabIndex={props.fieldId + 1}
      />
    </div>
    {props.attributes[props.fieldId] !== '' ? (
      <div>
        <button
          type="button"
          className="btn btn-link btn-remove"
          onClick={() => props.removeAttribute(props.fieldId)}
        >
          &times;
        </button>
      </div>
    ) : (
      <div className="btn-placeholder" />
    )}
  </div>
);
