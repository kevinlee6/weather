import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Buttons from '../Buttons';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Router>
      <Buttons command="Sign In" />
    </Router>
  );
});

afterEach(() => wrapped.unmount());

it('has a button', () => {
  expect(wrapped.find('button').length).toBe(1);
});

it('has a link', () => {
  expect(wrapped.find('a').length).toBe(1);
});
