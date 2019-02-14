import React from 'react';
import { mount } from 'enzyme';
import AuthButtons from '../AuthButtons';
import Root from 'Root';
import { BrowserRouter as Router } from 'react-router-dom';

const state = {
  auth: {
    authenticated: 'email@gmail.com',
  },
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root initialState={state}>
      <Router>
        <AuthButtons />
      </Router>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('tests for presence of one button when auth', () => {
  expect(wrapped.find('button').length).toBe(1);
});
