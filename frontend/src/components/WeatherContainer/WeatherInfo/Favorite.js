import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from 'actions';
import { Button, Icon } from 'antd';
import styled from 'styled-components';

const Favorite = ({ toggleFavorite, allCityIds, city, country, city_id }) => {
  const isFavorite = allCityIds.includes(city_id);
  return (
    <SButton
      shape="circle-outline"
      type="ghost"
      onClick={() => toggleFavorite({ city, country, city_id })}
    >
      <Star type="star" theme={isFavorite ? 'filled' : 'twoTone'} />
    </SButton>
  );
};

const mapStateToProps = state => {
  const { favorite, weather } = state;
  const { location, city_id } = weather;
  const { allCityIds } = favorite;
  return { ...location, allCityIds, city_id };
};

export default connect(
  mapStateToProps,
  { toggleFavorite }
)(Favorite);

const Star = styled(Icon)`
  color: yellow;
`;

const SButton = styled(Button)`
  position: absolute !important;
  border: 0 !important;
  top: 8px;
  right: 8px;
`;
