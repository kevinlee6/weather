import * as selectors from '../selectors';

const cityInfo = {
  1: {
    city: 'NY',
    country: 'US',
  },
  3: {
    city: 'NJ',
    country: 'US',
  },
  5: {
    city: 'PA',
    country: 'US',
  },
};

const state = {
  allCityIds: [1, 3, 5],
  byCityId: cityInfo,
};

const expected = state.allCityIds.map(city_id => ({
  ...state.byCityId[city_id],
  city_id,
}));

it('tests mapIds', () => {
  expect(selectors.mapIds(state)).toEqual(expected);
});
