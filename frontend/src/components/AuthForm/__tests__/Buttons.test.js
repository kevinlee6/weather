import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import Buttons from '../Buttons';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Buttons />
    </Root>
  );
});

afterEach(() => wrapped.unmount());

it('has a button', () => {
  expect(wrapped.find('button').length).toEqual(1);
});
