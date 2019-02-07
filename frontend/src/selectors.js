const initialState = { allCityIds: [], byCityId: {} };

export const mapIds = (favorite = initialState) => {
  const allIds = favorite.allCityIds;
  const byId = favorite.byCityId;
  return allIds.map(city_id => ({ ...byId[city_id], city_id }));
};
