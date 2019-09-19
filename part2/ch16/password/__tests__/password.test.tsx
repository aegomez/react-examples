import React from 'react';
import { findDOMNode as fD } from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';

import Password from '../tsx/password';
import { PasswordProps } from '../tsx/types';

describe('Password', () => {
  it('changes after clicking the Generate button', done => {
    let props: PasswordProps = {
      upperCase: true,
      lowerCase: true,
      special: true,
      number: true,
      over6: true
    }
    let password = TestUtils.renderIntoDocument<{}, React.Component>(
      <Password {...props} />
    );

    let rules = TestUtils.scryRenderedDOMComponentsWithTag(password, 'li');
    let generateButton = TestUtils.findRenderedDOMComponentWithClass(password, 'generate-btn');
    
    // 1. The Password element has a list of five items
    expect(rules.length).toBe(5);
    
    // 2. The first item in the list has a specific test
    expect(fD(rules[0])!.textContent).toEqual('Must have at least one upper-case character');

    // 3. The second item isn't fulfilled (strikethrough)
    expect(fD(rules[1])!.firstChild!.nodeName.toLowerCase()).toBe('#text');

    // 4. Click the Generate button
    TestUtils.Simulate.click(fD(generateButton) as Element);

    // 5. After clicking, the second list item become fulfilled
    expect(fD(rules[1])!.firstChild!.nodeName.toLowerCase()).toBe('s');

    /* Shallow Rendering */

    const passwordRenderer = TestRenderer.create(
      <Password {...props} />
    );

    let p = passwordRenderer.toJSON();

    expect(p!.type).toBe('div');
    expect(p!.children!.length).toBe(6);
    
    done();
  });
});