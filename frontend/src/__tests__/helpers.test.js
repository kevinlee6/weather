import * as helpers from '../helpers';

it('tests titleCase', () => {
  expect(helpers.titleCase('test')).toBe('Test');
});

it('tests suffixAsync', () => {
  expect(helpers.suffixAsync('test')).toEqual([
    'TEST_REQUEST',
    'TEST_SUCCESS',
    'TEST_FAILURE',
  ]);
});

it('tests convertUnitsInState', () => {
  const state = {
    temp: {
      min: 0,
      cur: 0,
      max: 10,
    },
    windSpeed: 1,
  };
  const unit = 'imperial';
  const res = {
    temp: {
      min: 32,
      cur: 32,
      max: 50,
    },
    windSpeed: 2,
  };
  expect(helpers.convertUnitsInState(state, unit)).toEqual(res);
});
