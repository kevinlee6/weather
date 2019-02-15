import * as actions from '../index';
import * as types from '../types';
import { IMPERIAL, METRIC } from 'constant';

it('tests updateWeather', () => {
  const action1 = {
    type: types.UPDATE_WEATHER,
    payload: {
      unit: METRIC,
    },
  };
  const action2 = {
    ...action1,
    payload: {
      unit: IMPERIAL,
    },
  };
  expect(actions.updateWeather(METRIC)).toEqual(action1);
  expect(actions.updateWeather(IMPERIAL)).toEqual(action2);
});
