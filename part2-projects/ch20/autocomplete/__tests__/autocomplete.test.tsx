import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { findDOMNode } from 'react-dom';

import Autocomplete from '../src/autocomplete';

const rooms = [
  {
    "_id": "5622eb1f105807ceb6ad868b",
    "name": "node"
  },
  {
    "_id": "5622eb1f105807ceb6ad868c",
    "name": "react"
  },
  {
    "_id": "5622eb1f105807ceb6ad868d",
    "name": "backbone"
  },
  {
    "_id": "5622eb1f105807ceb6ad868e",
    "name": "angular"
  }
];

const autocomplete = TestUtils.renderIntoDocument<{}, React.Component>(
  <Autocomplete options={rooms} url="test"/>
);

const optionName = TestUtils.findRenderedDOMComponentWithClass(
  autocomplete, 'option-name'
);

const fD = (instance: Element | React.Component) => (
  findDOMNode(instance) as HTMLInputElement
);

describe('Autocomplete', () => {
  test('have four initial options', () => {
    let options = TestUtils.scryRenderedDOMComponentsWithClass(
      autocomplete,
      'option-list-item'
    );
    expect(options.length).toBe(4);
  });

  test('change options based on the input', () => {
    expect(fD(optionName).value).toBe('');

    fD(optionName).value = 'r';
    TestUtils.Simulate.change(fD(optionName));
    expect(fD(optionName).value).toBe('r');

    let options = TestUtils.scryRenderedDOMComponentsWithClass(autocomplete,
    'option-list-item');
    expect(options.length).toBe(1);
    expect(fD(options[0]).textContent).toBe('#react');
  });

  it('offer to save option when there are no matches', () => {
    fD(optionName).value = 'ember';
    TestUtils.Simulate.change(fD(optionName));
    let options = TestUtils.scryRenderedDOMComponentsWithClass(
      autocomplete,
      'option-list-item'
    );
    expect(options.length).toBe(0);
    let optionAdd = TestUtils.findRenderedDOMComponentWithClass(
      autocomplete,
      'option-add'
    );
    expect(fD(optionAdd).textContent).toBe('Add #ember');
  });

});