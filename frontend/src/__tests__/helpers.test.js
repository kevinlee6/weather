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

it('tests setUrl', () => {
  const payload = {
    query: 'New York',
    unit: 'imperial',
  };
  const KEY = process.env.REACT_APP_WEATHER;
  const res = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${KEY}&units=imperial`;
  expect(helpers.setUrl(payload)).toBe(res);
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
