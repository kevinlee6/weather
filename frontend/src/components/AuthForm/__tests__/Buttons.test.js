import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from 'Root';
import Buttons from '../Buttons';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Router>
        <Buttons />
      </Router>
    </Root>
  );
});

afterEach(() => wrapped.unmount());

it('has a button', () => {
  expect(wrapped.find('button').length).toEqual(1);
});
